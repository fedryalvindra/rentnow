import { useQuery } from '@tanstack/react-query';
import { getRents } from '../../services/apiRent.js';
import { useSearchParams } from 'react-router-dom';

export function useRents() {
  const [searchParams] = useSearchParams();
  const status = searchParams.get('status');
  const sortBy = searchParams.get('sortBy');

  const { data, isLoading } = useQuery({
    queryKey: ['rents', status, sortBy],
    queryFn: () => getRents(status, sortBy),
  });

  return { data, isLoading };
}
