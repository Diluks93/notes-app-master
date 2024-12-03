import type { DraggableProvided } from '@hello-pangea/dnd';

import type { INote } from '../../../shared';

export type TColor = Pick<INote, 'color'>;

export type TNote = INote & {
  dragHandleProps: DraggableProvided['dragHandleProps'];
};
