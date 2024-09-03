import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteProduct } from '../../services/apiCars.js';
import toast from 'react-hot-toast';

export function useDeleteProduct() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      toast.success('Product Sucessfully Deleted!');
      queryClient.invalidateQueries({
        queryKey: ['products'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isPending };
}
