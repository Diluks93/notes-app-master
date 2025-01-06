import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

import type { INote } from '../../../../shared';
import { KEY } from '../../../../client/constants';
import { getNotesUrl } from '../../helpers';

export const useUpdateNote = (id: INote['id']) => {
  const queryClient = useQueryClient();
  const mutation = useMutation<
    INote,
    Error,
    Partial<Omit<INote, 'tags'> & { tags: string[] }>
  >({
    mutationFn: async (fields) =>
      (await axios.patch(getNotesUrl({ id }), fields)).data,
    onSuccess: (newNote) => {
      queryClient.setQueryData<INote[]>([KEY.NOTES], (oldNotes = []) =>
        oldNotes.map((note) => (note.id === newNote.id ? newNote : note)),
      );
    },
  });

  return { mutation };
};
