import config from '@/config/index';

import { makeRequest } from '@/helpers/requests';

export const createFeedback = (data) => {
  const { url, method } = config.apis.createFeedback;
  return makeRequest(url, method, data);
};
