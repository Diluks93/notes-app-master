import { IsIn, IsOptional } from 'class-validator';

import { COLORS, type INote } from '../../../../shared';
import { CreateNoteDto } from './create-note.dto';

export class UpdateNoteDto extends CreateNoteDto implements Partial<INote> {
  @IsOptional()
  @IsIn(COLORS)
  readonly color?: INote['color'];
}
