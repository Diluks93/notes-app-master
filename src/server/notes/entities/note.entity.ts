import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { COLORS, type INote, type TValueColor } from '../../../shared';

import { Tag } from './tag.entity';

@Entity()
export class Note implements INote {
  @PrimaryGeneratedColumn('uuid')
  id: INote['id'];

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: COLORS,
  })
  color: TValueColor;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  date: Date;

  @JoinTable({
    name: 'note_tags',
    joinColumn: { name: 'note_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'tag_id', referencedColumnName: 'id' },
  })
  @ManyToMany(() => Tag, (tag) => tag.notes, {
    cascade: true,
  })
  tags: Array<Tag>;

  @Column()
  subTitle: string;

  @Column({ default: 1, unique: true })
  order: number;
}
