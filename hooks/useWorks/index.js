import { useQuery } from 'react-query';

import config from '@/config/index';

import { makeRequest } from '@/helpers/requests';

export const fetchWorks = async () => {
  const { url, method } = config.apis.getWorks;
  const response = await makeRequest(url, method);
  return response.data;
};

export const useWorks = () => {
  return useQuery(['works'], fetchWorks);
};
