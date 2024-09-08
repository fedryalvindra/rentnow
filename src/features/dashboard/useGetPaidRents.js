import { useQuery } from '@tanstack/react-query';
import { getPaidRents } from '../../services/apiRent.js';

export function useGetPaidRents() {
  const { data, isLoading } = useQuery({
    queryKey: ['paidRent'],
    queryFn: getPaidRents,
  });
  return { data, isLoading };
}
