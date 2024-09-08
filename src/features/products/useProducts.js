import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../services/apiCars.js';
import { useSearchParams } from 'react-router-dom';

export function useProducts() {
  const [searchParams] = useSearchParams();
  const status = searchParams.get('status');
  const category = searchParams.get('category');
  const sortBy = searchParams.get('sortBy');
  const page = searchParams.get('page');
  const search = searchParams.get('search');

  const { data, isLoading } = useQuery({
    queryFn: () => getProducts(status, category, sortBy, page, search),
    queryKey: ['products', status, category, sortBy, page, search],
  });

  return { data, isLoading };
}
