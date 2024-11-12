import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Note } from './note.entity';

import type { ITag } from '../../../shared';

@Entity()
export class Tag implements ITag {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Note, (note) => note.tags)
  notes: Array<Note>;
}
