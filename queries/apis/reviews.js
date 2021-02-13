import config from '@/config/index';

import { makeRequest } from '@/helpers/requests';

export const fetchReviews = async () => {
  const { url, method } = config.apis.getReviews;
  const response = await makeRequest(url, method);
  return response.data;
};
