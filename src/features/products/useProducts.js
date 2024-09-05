import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../services/apiCars.js';

export function useProducts() {
  const { data, isLoading } = useQuery({
    queryFn: getProducts,
    queryKey: ['products'],
  });

  return { data, isLoading };
}
