import type { INote } from '../../../../shared';

export type TCreateNoteDtoModel = Omit<
  INote,
  'id' | 'color' | 'date' | 'order'
>;
