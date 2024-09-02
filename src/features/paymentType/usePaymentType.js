import { useQuery } from '@tanstack/react-query';
import { getPaymentType } from '../../services/apiPaymentType.js';
import { useParams } from 'react-router-dom';

export function usePaymentType() {
  const { paymentTypeID } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ['paymentType'],
    queryFn: () => getPaymentType(paymentTypeID),
  });

  return { data, isLoading };
}
