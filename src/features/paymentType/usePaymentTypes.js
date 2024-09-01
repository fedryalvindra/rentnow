import { useQuery } from '@tanstack/react-query';
import { getPaymentTypes } from '../../services/apiPaymentType.js';

export function usePaymentTypes() {
  const { data, isLoading } = useQuery({
    queryKey: ['paymentTypes'],
    queryFn: getPaymentTypes,
  });

  return { data, isLoading };
}
