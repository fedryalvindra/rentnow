import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getShipmentType } from '../../services/apiShipmentTypes.js';

export function useShipmentType() {
  const { shipmentID } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ['shipmentType', shipmentID],
    queryFn: () => getShipmentType(shipmentID),
  });

  return { data, isLoading };
}
