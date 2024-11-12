import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { type ITag } from '../../shared';
import {
  AbstractCrudService,
  PaginationQueryDto,
  GetFilterDto,
} from '../common';

import { Note, Tag } from './entities';
import { CreateNoteDto, UpdateNoteDto, UpdateNoteOrderDto } from './dto';
import { NotesRepository } from './notes.repository';

@Injectable()
export class NotesService extends AbstractCrudService<
  Note,
  CreateNoteDto,
  UpdateNoteDto
> {
  constructor(
    @InjectRepository(NotesRepository)
    private readonly notesRepository: NotesRepository,
    @InjectRepository(Tag)
    private readonly tagsRepository: Repository<Tag>,
  ) {
    super(notesRepository);
  }

  private async preloadTagByName({ name }: ITag): Promise<Tag> {
    const existingFlavor = await this.tagsRepository.findOne({
      where: { name },
    });

    if (existingFlavor) {
      return existingFlavor;
    }

    return this.tagsRepository.create({ name });
  }

  async create(createNoteDto: CreateNoteDto): Promise<Note> {
    const tags = await Promise.all(
      createNoteDto.tags.map((tag) => this.preloadTagByName(tag)),
    );

    return this.notesRepository.createNote(createNoteDto, tags);
  }

  async findAllNotes(
    filterDto: GetFilterDto,
    paginationDto: PaginationQueryDto,
  ): Promise<Note[]> {
    return this.notesRepository.findAllNotes(filterDto, paginationDto);
  }

  async update(id: Note['id'], updateNoteDto: UpdateNoteDto): Promise<Note> {
    const tags =
      updateNoteDto.tags &&
      (await Promise.all(
        updateNoteDto.tags.map((tag) => this.preloadTagByName(tag)),
      ));

    return this.notesRepository.updateNote(id, updateNoteDto, tags);
  }

  async updateNoteOrder(
    id: Note['id'],
    updateNoteOrderDto: UpdateNoteOrderDto,
  ): Promise<Array<Note>> {
    return this.notesRepository.updateOrder(id, updateNoteOrderDto);
  }

  async remove(id: Note['id']): Promise<void> {
    const result = await this.notesRepository.delete({
      id,
    });

    if (result.affected === 0) {
      throw new NotFoundException(`Note with ID "${id}" not found`);
    }
  }

  async removeTag(id: Note['id'], tagId: Tag['id']): Promise<void> {
    const result = await this.notesRepository.removeTag(id, tagId);

    if (result.affected === 0) {
      throw new NotFoundException(
        `Tag with ID "${tagId}" not found in Note ID "${id}"`,
      );
    }
  }
}
