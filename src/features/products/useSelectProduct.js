import { useQuery } from '@tanstack/react-query';
import { getProductsSelect } from '../../services/apiCars.js';

export function useSelectProduct() {
  const { data, isLoading } = useQuery({
    queryFn: getProductsSelect,
    queryKey: ['selectProducts'],
  });

  return { data, isLoading };
}
