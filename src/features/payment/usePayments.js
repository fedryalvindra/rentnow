import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getPayments } from '../../services/apiPayment.js';

export function usePayments() {
  const { paymentTypeID } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ['payments', paymentTypeID],
    queryFn: () => getPayments(paymentTypeID),
  });

  return { data, isLoading };
}
