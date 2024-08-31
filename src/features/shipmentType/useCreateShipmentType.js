import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createShipmentType } from '../../services/apiShipmentTypes.js';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

export function useCreateShipmentType() {
  const queryClient = useQueryClient();
  const { shipmentID } = useParams();

  const { mutate, isPending } = useMutation({
    mutationFn: (shipmentType) =>
      createShipmentType({ ...shipmentType, shipmentID }),
    onSuccess: (data) => {
      toast.success(`${data.shipmentType} sucessfully created`);
      queryClient.invalidateQueries({
        queryKey: ['shipmentType', shipmentID],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isPending };
}
