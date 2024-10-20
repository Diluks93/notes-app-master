import {
  Body,
  Delete,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';

import { AbstractCrudService } from './service.entity';
import { TransformInterceptor } from '../interceptors';

export abstract class AbstractCrudController<T extends { id: string }, C, U> {
  protected abstract readonly service: AbstractCrudService<T, C, U>;

  @Post()
  @UseInterceptors(TransformInterceptor)
  async create(@Body() createDto: C): Promise<T> {
    return this.service.create(createDto);
  }

  @Patch(':id')
  @UseInterceptors(TransformInterceptor)
  async update(@Param('id') id: T['id'], @Body() updateDto: U): Promise<T> {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: T['id']): Promise<void> {
    return this.service.remove(id);
  }
}
