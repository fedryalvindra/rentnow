import { useQuery } from '@tanstack/react-query';
import { getRentTotalSales } from '../../services/apiRent.js';

export function useGetTotalSalesRents() {
  const { data, isLoading } = useQuery({
    queryKey: ['totalSalesRents'],
    queryFn: getRentTotalSales,
  });
  return { data, isLoading };
}
