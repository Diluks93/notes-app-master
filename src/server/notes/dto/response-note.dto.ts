import { Expose, Transform, Type } from 'class-transformer';

import type { TValueColor } from '../../../shared';

import { TagResponseDto } from './response-tag.dto';

export class NoteResponseDto {
  @Expose()
  id: string;

  @Expose()
  title: string;

  @Expose()
  description: string;

  @Expose()
  color: TValueColor;

  @Expose()
  @Transform(({ value }) => {
    if (!value) return null;
    const date = value instanceof Date ? value : new Date(value);
    return `${date.getFullYear()}.${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
  })
  date: string;

  @Expose()
  subTitle: string;

  @Expose()
  order: number;

  @Expose()
  @Type(() => TagResponseDto)
  tags: TagResponseDto[];
}
