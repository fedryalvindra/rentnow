import { useMutation } from '@tanstack/react-query';
import { createCustomer } from '../../services/apiCustomers.js';
import toast from 'react-hot-toast';

export function useCreateCustomer() {
  const { mutate, isPending } = useMutation({
    mutationFn: createCustomer,
    onSuccess: () => {
      toast.success('Successfully add new customer');
    },
    onError: (err) => toast.error(err.message),
  });
  return { mutate, isPending };
}
