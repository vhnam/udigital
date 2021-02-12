import { useQuery } from 'react-query';

import config from '@/config/index';

import { makeRequest } from '@/helpers/requests';

export const fetchAbout = async () => {
  const { url, method } = config.apis.getAbout;
  const response = await makeRequest(url, method);
  return response.data;
};

export const useAbout = () => {
  return useQuery(['about'], fetchAbout);
};
