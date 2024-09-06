import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getCustomers } from '../../services/apiCustomers.js';
import toast from 'react-hot-toast';

export function useCustomers() {
  const { data, mutate, isPending } = useMutation({
    mutationFn: getCustomers,
    onSuccess: () => {
      toast.success('Successfully get customer data');
    },
    onError: (err) => toast.error(err.message),
  });
  return { data, isPending, mutate };
}
