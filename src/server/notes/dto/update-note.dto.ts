import { IsIn, IsOptional } from 'class-validator';

import { COLORS, type INote } from '../../../shared';

export class UpdateNoteDto implements Partial<Omit<INote, 'tags'>> {
  @IsOptional()
  @IsIn(COLORS)
  readonly color?: INote['color'];

  @IsOptional()
  readonly tags: string[];
}
