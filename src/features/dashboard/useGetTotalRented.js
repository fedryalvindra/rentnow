import { useQuery } from '@tanstack/react-query';
import { getTotalRented } from '../../services/apiRent.js';

export function useGetTotalRented() {
  const { data, isLoading } = useQuery({
    queryKey: ['totalRentedRents'],
    queryFn: getTotalRented,
  });
  return { data, isLoading };
}
