import { useQuery } from 'react-query';

import { fetchServices } from '@/queries/apis/services';

export const useServices = () => useQuery(['services'], fetchServices);
