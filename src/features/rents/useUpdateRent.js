import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { updateRent } from '../../services/apiRent.js';
import toast from 'react-hot-toast';

export function useUpdateRent() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: updateRent,
    onSuccess: () => {
      toast.success('Successfully update rent data');
      queryClient.invalidateQueries({
        queryKey: ['rents'],
      });
    },
    onError: (err) => toast.error(err.message),
    onSettled: () => navigate('/rents'),
  });

  return { mutate, isPending };
}
