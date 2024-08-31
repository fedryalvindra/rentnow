import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createShipment } from '../../services/apiShipments.js';
import toast from 'react-hot-toast';

export function useCreateShipment() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createShipment,
    onSuccess: (data) => {
      toast.success(`${data.shipmentName} sucessfully created`);
      queryClient.invalidateQueries({
        queryKey: ['shipments'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isPending };
}
