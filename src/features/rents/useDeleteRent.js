import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteRent } from '../../services/apiRent.js';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useDeleteRent() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: deleteRent,
    onSuccess: () => {
      toast.success('Rent successfully deleted');
      queryClient.invalidateQueries({
        queryKey: ['rents'],
      });
      navigate('/rents');
    },
    onError: (err) => toast.error(err.message),
  });
  return { mutate, isPending };
}
