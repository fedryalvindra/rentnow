import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login } from '../../services/apiAuth.js';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user.user);
      toast.success(`Successfully login as ${user.user.email}`);
      navigate('/dashboard', { replace: true });
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error('Provided email or password incorrect');
    },
  });

  return { mutate, isPending };
}
