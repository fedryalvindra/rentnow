import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPaymentType } from '../../services/apiPaymentType.js';
import toast from 'react-hot-toast';

export function useCreatePaymentType() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createPaymentType,
    onSuccess: (data) => {
      toast.success(`Sucessfully create ${data.paymentType}`);
      queryClient.invalidateQueries({
        queryKey: ['paymentTypes'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isPending };
}
