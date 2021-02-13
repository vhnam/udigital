import { useQuery } from 'react-query';

import { fetchReviews } from '@/queries/apis/reviews';

export const useReviews = () => useQuery(['reviews'], fetchReviews);
