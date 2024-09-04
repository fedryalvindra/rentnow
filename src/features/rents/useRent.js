import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getRent } from '../../services/apiRent.js';

export function useRent() {
  const { rentID } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ['rent', rentID],
    queryFn: () => getRent(rentID),
  });

  return { data, isLoading };
}
