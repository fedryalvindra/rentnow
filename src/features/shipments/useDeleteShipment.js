import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteShipment } from '../../services/apiShipments.js';
import toast from 'react-hot-toast';

export function useDeleteShipment() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: deleteShipment,
    onSuccess: () => {
      toast.success(`Successfully delete shipment`);
      queryClient.invalidateQueries({
        queryKey: ['shipments'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isPending };
}
