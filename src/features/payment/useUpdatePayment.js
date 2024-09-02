import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updatePayment } from '../../services/apiPayment.js';
import toast from 'react-hot-toast';

export function useUpdatePayment() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: updatePayment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['payments'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isPending };
}
