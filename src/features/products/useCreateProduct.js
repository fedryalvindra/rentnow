import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createProduct } from '../../services/apiProducts.js';
import toast from 'react-hot-toast';

export function useCreateProduct() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      toast.success('New Product Sucessfully Created!');
      queryClient.invalidateQueries({
        queryKey: ['products'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isPending };
}
