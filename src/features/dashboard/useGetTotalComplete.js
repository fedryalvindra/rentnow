import { useQuery } from '@tanstack/react-query';
import { getTotalComplete } from '../../services/apiRent.js';

export function useGetTotalComplete() {
  const { data, isLoading } = useQuery({
    queryKey: ['totalCompleteRents'],
    queryFn: getTotalComplete,
  });
  return { data, isLoading };
}
