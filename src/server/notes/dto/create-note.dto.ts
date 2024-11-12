import { IsArray, IsOptional, IsString } from 'class-validator';

import type { INote } from '../../../shared';
import type { TCreateNoteDtoModel } from '../models';

export class CreateNoteDto implements TCreateNoteDtoModel {
  @IsString()
  @IsOptional()
  readonly title: INote['title'];

  @IsString()
  @IsOptional()
  readonly description: INote['description'];

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  readonly tags: INote['tags'];

  @IsString()
  @IsOptional()
  readonly subTitle: INote['subTitle'];

  constructor({ title, description, tags, subTitle }: TCreateNoteDtoModel) {
    this.title = title || '';
    this.description = description || '';
    this.tags = tags || [];
    this.subTitle = subTitle || '';
  }
}
