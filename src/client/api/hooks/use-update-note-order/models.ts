import type { INote } from '../../../../shared';

export type TMutationFn = Pick<INote, 'id' | 'order'>;
