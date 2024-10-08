import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCustomer } from '../../services/apiCustomers.js';
import toast from 'react-hot-toast';

export function useCreateCustomer() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createCustomer,
    onSuccess: () => {
      toast.success('Successfully add new customer');
      queryClient.invalidateQueries({
        queryKey: ['customers'],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { mutate, isPending };
}
