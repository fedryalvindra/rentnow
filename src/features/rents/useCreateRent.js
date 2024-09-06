import toast from 'react-hot-toast';
import { createRent } from '../../services/apiRent.js';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export function useCreateRent() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createRent,
    onSuccess: () => {
      toast.success('Successfully create rent data');
      queryClient.invalidateQueries({
        queryKey: ['rents'],
      });
    },
    onError: (err) => toast.error(err.message),
    onSettled: () => navigate('/rents'),
  });

  return { mutate, isPending };
}
