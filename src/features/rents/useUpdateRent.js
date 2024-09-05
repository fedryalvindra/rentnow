import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { updateRent } from '../../services/apiRent.js';
import toast from 'react-hot-toast';

export function useUpdateRent() {
  const { rentID } = useParams();

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (updateData) =>
      updateRent({ updateData: { ...updateData }, id: rentID }),
    onSuccess: () => {
      toast.success('Successfully update rent data');
      queryClient.invalidateQueries({
        queryKey: ['rents'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isPending };
}
