import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCategory } from '../../services/apiCategory.js';
import toast from 'react-hot-toast';

export function useCreateCategory() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createCategory,
    onSuccess: (data) => {
      toast.success(`Successfully add ${data.categoryName}`);
      queryClient.invalidateQueries({
        queryKey: ['categories'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isPending };
}
