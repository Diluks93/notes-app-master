import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

import type { INote } from '../../../../shared';
import { KEY } from '../../../../client/constants';
import { getNotesUrl } from '../../helpers';

export const useCreateNewNote = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation<INote>({
    mutationFn: async () =>
      (
        await axios.post(getNotesUrl({}), {
          tags: [],
        })
      ).data,
    onSuccess: (newNote) => {
      queryClient.setQueryData<INote[]>([KEY.NOTES], (oldNotes = []) => [
        ...oldNotes,
        newNote,
      ]);
    },
  });

  return { mutation };
};
