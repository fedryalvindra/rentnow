import { useQuery } from '@tanstack/react-query';
import { getTotalPaid } from '../../services/apiRent.js';

export function useGetTotalPaid() {
  const { data, isLoading } = useQuery({
    queryKey: ['totalPaidRents'],
    queryFn: getTotalPaid,
  });
  return { data, isLoading };
}
