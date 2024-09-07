import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../services/apiCars.js';
import { useSearchParams } from 'react-router-dom';

export function useProducts() {
  const [searchParams] = useSearchParams();
  const status = searchParams.get('status');
  const category = searchParams.get('category');
  const sortBy = searchParams.get('sortBy');

  const { data, isLoading } = useQuery({
    queryFn: () => getProducts(status, category, sortBy),
    queryKey: ['products', status, category, sortBy],
  });

  return { data, isLoading };
}
