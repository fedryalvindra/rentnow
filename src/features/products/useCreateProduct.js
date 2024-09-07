import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createProduct } from '../../services/apiCars.js';
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
      queryClient.invalidateQueries({
        queryKey: ['selectProducts'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isPending };
}
