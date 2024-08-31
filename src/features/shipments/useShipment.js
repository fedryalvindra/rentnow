import { useQuery } from '@tanstack/react-query';
import { getShipment } from '../../services/apiShipments.js';
import { useParams } from 'react-router-dom';

export function useShipment() {
  const { shipmentID } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ['shipment'],
    queryFn: () => getShipment(shipmentID),
  });
  return { data, isLoading };
}
