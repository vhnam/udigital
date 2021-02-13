import { useQuery } from 'react-query';

import { fetchAbout } from '@/queries/apis/about';

export const useAbout = () => useQuery(['about'], fetchAbout);
