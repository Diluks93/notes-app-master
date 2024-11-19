import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

import { getNotesUrl } from '../../helpers';
import { KEY } from '../../../constants';

export const useRemoveNote = (id: string) => {
  const queryClient = useQueryClient();
  const mutation = useMutation<void>({
    mutationFn: async () => (await axios.delete(getNotesUrl({ id }))).data,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [KEY.NOTES] }),
  });

  return { mutation };
};
