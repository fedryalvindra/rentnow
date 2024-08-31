import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateShipment } from '../../services/apiShipments.js';
import toast from 'react-hot-toast';

export function useUpdateShipment() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: updateShipment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['shipments'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isPending };
}
