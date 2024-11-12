import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Query,
  UseInterceptors,
} from '@nestjs/common';

import {
  AbstractCrudController,
  PaginationQueryDto,
  TransformInterceptor,
  GetFilterDto,
} from '../common';
import { PAGINATION } from '../../shared';

import { CreateNoteDto, UpdateNoteDto, UpdateNoteOrderDto } from './dto';
import { NotesService } from './notes.service';
import { Note, type Tag } from './entities';

@Controller('api/notes')
@UseInterceptors(TransformInterceptor)
export class NotesController extends AbstractCrudController<
  Note,
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
  ): Promise<Array<Note>> {
    return this.service.findAllNotes(filterDto, {
      take: paginationDto.take || PAGINATION.take,
      skip: paginationDto.skip || PAGINATION.skip,
    });
  }

  @Patch(':id/order')
  async updateOrder(
    @Param('id') id: Note['id'],
    @Body() updateOrderDto: UpdateNoteOrderDto,
  ): Promise<Array<Note>> {
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
}
