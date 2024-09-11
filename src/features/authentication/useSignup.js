import { useMutation } from '@tanstack/react-query';
import { signup } from '../../services/apiAuth.js';
import toast from 'react-hot-toast';

export function useSignup() {
  const { mutate, isPending } = useMutation({
    mutationFn: signup,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        'Please verify the new account from the user email address',
      );
    },
  });
  return { mutate, isPending };
}
