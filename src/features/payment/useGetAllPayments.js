import { useQuery } from '@tanstack/react-query';
import { getAllPayments } from '../../services/apiPayment.js';

export function useGetAllPayments() {
  const { data, isLoading } = useQuery({
    queryKey: ['allPayments'],
    queryFn: getAllPayments,
  });
  return { data, isLoading };
}
