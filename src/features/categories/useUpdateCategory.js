import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCategory } from '../../services/apiCategory.js';
import toast from 'react-hot-toast';

export function useUpdateCategory() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: updateCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['categories'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isPending };
}
