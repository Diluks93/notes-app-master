import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';

import {
  AbstractCrudController,
  PaginationQueryDto,
  GetFilterDto,
} from '../common';
import { PAGINATION } from '../../shared';

import {
  CreateNoteDto,
  UpdateNoteDto,
  UpdateNoteOrderDto,
  NoteResponseDto,
} from './dto';
import { NotesService } from './notes.service';
import { Note, Tag } from './entities';
import { NotesTransformInterceptor } from './interceptors';

@Controller('api/notes')
@UseInterceptors(NotesTransformInterceptor)
export class NotesController extends AbstractCrudController<
  NoteResponseDto,
  CreateNoteDto,
  UpdateNoteDto
> {
  constructor(protected readonly service: NotesService) {
    super();
  }

  @Get()
  async getNotes(
    @Query() filterDto: GetFilterDto,
    @Query()
    paginationDto: PaginationQueryDto,
  ): Promise<Array<NoteResponseDto>> {
    return this.service.findAll(filterDto, {
      take: paginationDto.take || PAGINATION.take,
      skip: paginationDto.skip || PAGINATION.skip,
    });
  }

  @Patch(':id/order')
  async updateOrder(
    @Param('id') id: Note['id'],
    @Body() updateOrderDto: UpdateNoteOrderDto,
  ): Promise<Array<NoteResponseDto>> {
    return this.service.updateNoteOrder(id, updateOrderDto);
  }

  @Delete(':id/tags/:tagId')
  @HttpCode(204)
  async deleteTag(
    @Param('id') id: Note['id'],
    @Param('tagId') tagId: Tag['id'],
  ): Promise<void> {
    return this.service.removeTag(id, tagId);
  }

  @Post()
  async create(@Body() createDto: CreateNoteDto): Promise<NoteResponseDto> {
    return super.create(createDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: Note['id'],
    @Body() updateDto: UpdateNoteDto,
  ): Promise<NoteResponseDto> {
    return super.update(id, updateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: Note['id']): Promise<void> {
    return super.remove(id);
  }
}
