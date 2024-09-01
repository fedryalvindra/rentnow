import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePaymentType } from '../../services/apiPaymentType.js';
import toast from 'react-hot-toast';

export function useDeletePaymentType() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: deletePaymentType,
    onSuccess: () => {
      toast.success('Successfully delete payment type');
      queryClient.invalidateQueries({
        queryKey: ['paymentTypes'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isPending };
}
