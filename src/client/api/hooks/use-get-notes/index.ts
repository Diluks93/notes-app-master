import {
  useQuery,
  type UndefinedInitialDataOptions,
} from '@tanstack/react-query';
import axios from 'axios';

import { KEY } from '../../../constants';
import type { IPaginationParams } from '../../models';
import { getNotesUrl } from '../../helpers';
import type { INote } from '../../../../shared';

export const useGetNotes = (
  params?: IPaginationParams,
  options?: UndefinedInitialDataOptions<Array<INote>>,
) => {
  const { data, isLoading, isError, error } = useQuery<Array<INote>>({
    ...options,
    queryKey: [KEY.NOTES],
    queryFn: async () => (await axios.get(getNotesUrl(params))).data,
  });

  return { data, isLoading, isError, error };
};
