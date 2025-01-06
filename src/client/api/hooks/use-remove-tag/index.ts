import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

import { getNotesUrl } from '../../helpers';
import { KEY } from '../../../constants';
import type { INote } from '../../../../shared';

import type { TMutationFn } from './models';

export const useRemoveTag = (noteId: INote['id']) => {
  const queryClient = useQueryClient();
  const mutation = useMutation<void, Error, TMutationFn>({
    mutationFn: async ({ tagId }) =>
      (await axios.delete(getNotesUrl({ id: noteId, tagId }))).data,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [KEY.NOTES], exact: true }),
  });

  return { mutation };
};
