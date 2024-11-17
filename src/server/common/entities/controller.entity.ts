import { Body, Param } from '@nestjs/common';

import { AbstractCrudService } from './service.entity';

export abstract class AbstractCrudController<T extends { id: string }, C, U> {
  protected abstract readonly service: AbstractCrudService<T, C, U>;

  protected async create(@Body() createDto: C): Promise<T> {
    return this.service.create(createDto);
  }

  protected async update(
    @Param('id') id: T['id'],
    @Body() updateDto: U,
  ): Promise<T> {
    return this.service.update(id, updateDto);
  }

  protected async remove(@Param('id') id: T['id']): Promise<void> {
    return this.service.remove(id);
  }

  protected async findAll(): Promise<Array<T>> {
    return this.service.findAll();
  }
}
