import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPayment } from '../../services/apiPayment.js';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useCreatePayment() {
  const queryClient = useQueryClient();
  const { paymentTypeID } = useParams();

  const { mutate, isPending } = useMutation({
    mutationFn: (paymentName) =>
      createPayment({ paymentName, id: paymentTypeID }),
    onSuccess: (data) => {
      toast.success(`Sucessfully add ${data.paymentName}`);
      queryClient.invalidateQueries({
        queryKey: ['payments', paymentTypeID],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isPending };
}
