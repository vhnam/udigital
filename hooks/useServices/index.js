import { useQuery } from 'react-query';

import config from '@/config/index';

import { makeRequest } from '@/helpers/requests';

export const fetchServices = async () => {
  const { url, method } = config.apis.getServices;
  const response = await makeRequest(url, method);
  return response.data;
};

export const useServices = () => {
  return useQuery(['services'], fetchServices);
};
