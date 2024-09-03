import { useQuery } from '@tanstack/react-query';
import { getRents } from '../../services/apiRent.js';

export function useRents() {
  const { data, isLoading } = useQuery({
    queryKey: ['rents'],
    queryFn: getRents,
  });

  return { data, isLoading };
}
