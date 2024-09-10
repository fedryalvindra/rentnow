import { useQuery } from '@tanstack/react-query';
import { getTotalUnconfirmed } from '../../services/apiRent.js';

export function useGetTotalUnconfirmed() {
  const { data, isLoading } = useQuery({
    queryKey: ['totalUnconfirmedRents'],
    queryFn: getTotalUnconfirmed,
  });
  return { data, isLoading };
}
