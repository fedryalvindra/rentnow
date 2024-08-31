import { useQuery } from '@tanstack/react-query';
import { getShipments } from '../../services/apiShipments.js';

export function useShipments() {
  const { data, isLoading } = useQuery({
    queryKey: ['shipments'],
    queryFn: getShipments,
  });

  return { data, isLoading };
}
