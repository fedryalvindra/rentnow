import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePayment } from '../../services/apiPayment.js';
import toast from 'react-hot-toast';

export function useDeletePayment() {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: deletePayment,
    onSuccess: () => {
      toast.success(`Successfully delete payment`);
      queryClient.invalidateQueries({
        queryKey: ['payments'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isPending };
}
