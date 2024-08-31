import toast from "react-hot-toast";
import { updateShipmentType } from "../../services/apiShipmentTypes.js";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateShipmentType() {
    const queryClient = useQueryClient();
  
    const { mutate, isPending } = useMutation({
      mutationFn: updateShipmentType,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['shipmentType'],
        });
      },
      onError: (err) => toast.error(err.message),
    });
  
    return { mutate, isPending };
  }