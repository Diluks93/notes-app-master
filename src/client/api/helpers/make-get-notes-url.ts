import { KEY } from '../../../client/constants';
import type { IParams } from '../models';

/**
 * Make the URL if parameters are specified
 */
export const getNotesUrl = ({ take, skip, search, id }: IParams): string => {
  const params = new URLSearchParams();
  let baseUrl = `api/${KEY.NOTES}`;

  if (take) params.append('take', take);
  if (skip) params.append('skip', skip);
  if (search) params.append('search', search);
  if (id) baseUrl += `/${id}`;

  return params.toString() ? `${baseUrl}?${params.toString()}` : baseUrl;
};
