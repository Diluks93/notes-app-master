import { Repository, DataSource, type DeleteResult } from 'typeorm';
import { Injectable, Logger, NotFoundException } from '@nestjs/common';

import { COLORS, type TValueColor } from '../../shared';
import { PaginationQueryDto, GetFilterDto } from '../common';

import { Note, Tag } from './entities';
import {
  UpdateNoteOrderDto,
  CreateNoteDto,
  UpdateNoteDto,
  NoteResponseDto,
} from './dto';

@Injectable()
export class NotesRepository extends Repository<NoteResponseDto> {
  private logger = new Logger('NotesRepository', { timestamp: true });
  private lastColorIndex = -1;

  constructor(private dataSource: DataSource) {
    super(Note, dataSource.createEntityManager());
  }

  private async setOrder(): Promise<number> {
    const maxOrderRecord = await this.createQueryBuilder('entity')
      .select('MAX(entity.order)', 'maxOrder')
      .getRawOne();

    return maxOrderRecord?.maxOrder ? maxOrderRecord.maxOrder + 1 : 1;
  }

  private getNextColor(): TValueColor {
    this.lastColorIndex = (this.lastColorIndex + 1) % COLORS.length;

    return COLORS[this.lastColorIndex];
  }

  async findAllNotes(
    { search }: GetFilterDto,
    { take, skip }: PaginationQueryDto,
  ): Promise<Array<NoteResponseDto>> {
    const query = this.createQueryBuilder('note');

    query.leftJoinAndSelect('note.tags', 'tag');

    if (search) {
      query.andWhere('(tag.name ILIKE :search)', { search: `%${search}%` });
    }

    return await query
      .take(Number(take))
      .skip(Number(skip))
      .orderBy('note.order', 'ASC')
      .getMany();
  }

  async createNote(
    createNoteDto: CreateNoteDto,
    tags: Array<Tag>,
  ): Promise<NoteResponseDto> {
    const order = await this.setOrder();
    const newNote = {
      ...new CreateNoteDto(createNoteDto),
      tags,
      color: this.getNextColor(),
      order,
    };

    return this.save(newNote);
  }

  async updateOrder(
    id: Note['id'],
    { order }: UpdateNoteOrderDto,
  ): Promise<Array<NoteResponseDto>> {
    let notes = await this.find({
      relations: ['tags'],
      order: { order: 'ASC' },
    });

    const currentIndex = notes.findIndex((note) => note.id === id);
    if (currentIndex === -1) {
      throw new NotFoundException(`Note with ID "${id}" not found`);
    }

    const [movedNote] = notes.splice(currentIndex, 1);
    notes.splice(order, 0, movedNote);

    notes = notes.map((note, index) => {
      note.order = -1 * (index + 1);

      return note;
    });

    await this.dataSource.transaction(async (manager) => {
      for (const note of notes) {
        await manager.save(note);
      }

      notes = notes.map((note, index) => {
        note.order = index;

        return note;
      });

      for (const note of notes) {
        await manager.save(note);
      }
    });

    return notes;
  }

  async updateNote(
    id: Note['id'],
    updateNoteDto: UpdateNoteDto,
    tags: Array<Tag>,
  ): Promise<NoteResponseDto> {
    const updatedNote = await this.preload({
      id,
      ...updateNoteDto,
      tags,
    });

    return this.save(updatedNote);
  }

  async removeTag(id: Note['id'], tagId: Tag['id']): Promise<DeleteResult> {
    return await this.dataSource
      .createQueryBuilder()
      .delete()
      .from('note_tags')
      .where('note_id = :id', { id })
      .andWhere('tag_id = :tagId', { tagId })
      .execute();
  }
}
