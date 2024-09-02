import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateProduct } from '../../services/apiProducts.js';
import toast from 'react-hot-toast';

export function useUpdateProduct() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ productObj, carImage }) =>
      updateProduct({ productObj, carImage }),
    onSuccess: (data) => {
      toast.success('Car successfully updated');
      queryClient.invalidateQueries({
        queryKey: ['products'],
      });
      queryClient.invalidateQueries({
        queryKey: ['product', data.id],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isPending };
}
