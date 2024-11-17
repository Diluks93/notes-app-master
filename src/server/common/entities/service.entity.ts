import type { Repository } from 'typeorm';

export abstract class AbstractCrudService<T extends { id: string }, C, U> {
  constructor(protected readonly repository: Repository<T>) {}

  abstract create(createDto: C): Promise<T>;
  abstract update(id: T['id'], updateDto: U): Promise<T>;
  abstract remove(id: T['id']): Promise<void>;
  abstract findAll(...pagination: any[]): Promise<Array<T>>;
}
