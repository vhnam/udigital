import { useQuery } from 'react-query';

import { fetchClients } from '@/queries/apis/clients';

export const useClients = () => useQuery(['clients'], fetchClients);
