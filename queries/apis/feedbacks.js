import config from '@/config/index';

import { makeRequest } from '@/helpers/requests';

export const createFeedback = async (data) => {
  const { url, method } = config.apis.createFeedback;
  const response = await makeRequest(url, method, data);
  return response.data;
};
