import { useQuery } from '@tanstack/react-query';
import { getRentedRents } from '../../services/apiRent.js';

export function useGetRentedRents() {
  const { data, isLoading } = useQuery({
    queryKey: ['rentedRent'],
    queryFn: getRentedRents,
  });
  return { data, isLoading };
}
