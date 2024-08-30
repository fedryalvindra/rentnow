import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCategory } from '../../services/apiCategory.js';
import toast from 'react-hot-toast';

export function useDeleteCategory() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      toast.success(`Successfully delete category`);
      queryClient.invalidateQueries({
        queryKey: ['categories'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isPending };
}
