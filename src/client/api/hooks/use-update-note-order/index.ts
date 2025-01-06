import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import type { INote } from '../../../../shared';
import { getNotesUrl } from '../../helpers';

import type { TMutationFn } from './models';

export const useUpdateNoteOrder = () => {
  const mutation = useMutation<INote, Error, TMutationFn>({
    mutationFn: async ({ id, order }) =>
      (await axios.patch(`${getNotesUrl({ id })}/order`, { order })).data,
  });

  return { mutation };
};
