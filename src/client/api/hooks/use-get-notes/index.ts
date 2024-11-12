import {
  useQuery,
  type UndefinedInitialDataOptions,
} from '@tanstack/react-query';
import axios from 'axios';

import { KEY } from '../../../constants';
import type { IPaginationParams } from '../../models';
import { getNotesUrl } from '../../helpers';

export const useGetNotes = <T>(
  params?: IPaginationParams,
  options?: UndefinedInitialDataOptions<T>,
) => {
  const { data, isLoading, isError, error } = useQuery<T>({
    ...options,
    queryKey: [KEY.NOTES],
    queryFn: async () => (await axios.get(getNotesUrl(params))).data,
  });

  return { data, isLoading, isError, error };
};
