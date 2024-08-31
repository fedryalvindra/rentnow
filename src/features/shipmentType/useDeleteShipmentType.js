import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteShipmentType } from '../../services/apiShipmentTypes.js';
import toast from 'react-hot-toast';

export function useDeleteShipmentType() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: deleteShipmentType,
    onSuccess: () => {
      toast.success(`Successfully delete shipment type`);
      queryClient.invalidateQueries({
        queryKey: ['shipmentType'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isPending };
}
