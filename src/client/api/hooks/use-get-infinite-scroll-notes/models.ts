import type { IParams } from '../../models';

export type TPageParam = {
  pageParam?: Pick<IParams, 'skip' | 'take'>;
};
