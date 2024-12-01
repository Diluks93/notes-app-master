import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

import { getNotesUrl } from '../../helpers';
import { KEY } from '../../../constants';

export const useRemoveTag = (noteId: string) => {
  const queryClient = useQueryClient();
  const mutation = useMutation<void, Error, { tagId: string }>({
    mutationFn: async ({ tagId }) =>
      (await axios.delete(getNotesUrl({ id: noteId, tagId }))).data,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [KEY.NOTES] }),
  });

  return { mutation };
};
