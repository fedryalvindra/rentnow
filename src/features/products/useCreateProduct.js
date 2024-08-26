import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createProduct } from '../../services/apiProducts.js';

export function useCreateProduct() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['products'],
      });
    },
  });

  return { mutate, isPending };
}
