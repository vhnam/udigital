import { useQuery } from 'react-query';

import { fetchWorks } from '@/queries/apis/works';

export const useWorks = () => useQuery(['works'], fetchWorks);
