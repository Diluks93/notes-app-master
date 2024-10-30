import { IsInt, IsOptional } from 'class-validator';

import type { INote } from '../../../../shared';

export class UpdateNoteOrderDto implements Pick<INote, 'order'> {
  @IsOptional()
  @IsInt()
  readonly order: number;
}
