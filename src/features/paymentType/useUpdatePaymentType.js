import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updatePaymentType } from '../../services/apiPaymentType.js';
import toast from 'react-hot-toast';

export function useUdpatePaymentType() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: updatePaymentType,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['paymentTypes'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isPending };
}
