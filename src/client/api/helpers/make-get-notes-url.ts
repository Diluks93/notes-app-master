import { KEY } from '../../../client/constants';
import type { IPaginationParams } from '../models';

/**
 * Make the URL if parameters are specified
 */
export const getNotesUrl = ({
  take,
  skip,
  search,
}: IPaginationParams): string => {
  const params = new URLSearchParams();
  const baseUrl = `api/${KEY.NOTES}`;

  if (take) params.append('take', take);
  if (skip) params.append('skip', skip);
  if (search) params.append('search', search);

  return params.toString() ? `${baseUrl}?${params.toString()}` : baseUrl;
};
