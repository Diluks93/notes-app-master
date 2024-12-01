import {
  useQuery,
  type UndefinedInitialDataOptions,
} from '@tanstack/react-query';
import axios from 'axios';

import { KEY } from '../../../constants';
import type { IParams } from '../../models';
import { getNotesUrl } from '../../helpers';
import type { INote } from '../../../../shared';

export const useGetNotes = (
  params?: IParams,
  options?: UndefinedInitialDataOptions<Array<INote>>,
) => {
  const { data, isLoading, isError, error } = useQuery<Array<INote>>({
    ...options,
    queryKey: [KEY.NOTES, params.search],
    queryFn: async () => (await axios.get(getNotesUrl(params))).data,
  });

  return { data, isLoading, isError, error };
};
