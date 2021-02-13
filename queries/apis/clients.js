import config from '@/config/index';

import { makeRequest } from '@/helpers/requests';

export const fetchClients = async () => {
  const { url, method } = config.apis.getClients;
  const response = await makeRequest(url, method);
  return response.data;
};
