import {
  useInfiniteQuery,
  type DefinedInitialDataInfiniteOptions,
} from '@tanstack/react-query';
import axios from 'axios';

import { KEY } from '../../../constants';
import { getNotesUrl } from '../../helpers';
import type { IParams } from '../../models';
import type { INote } from '../../../../shared';

import type { TPageParam } from './models';

export const useGetInfiniteScrollNotes = (
  params?: IParams,
  options?: DefinedInitialDataInfiniteOptions<Array<INote>>,
) => {
  const query = useInfiniteQuery<Array<INote>>({
    queryKey: [KEY.NOTES, params],
    queryFn: async ({ pageParam }: TPageParam) => {
      const requestParams = { ...params, ...pageParam };

      return (await axios.get(getNotesUrl(requestParams))).data;
    },
    getNextPageParam: (_lastPage, allPages) => {
      const totalLoaded = allPages.flat().length;

      return { skip: totalLoaded, take: params?.take };
    },
    initialPageParam: { skip: 0, take: params?.take },
    ...options,
  });

  return { ...query };
};
