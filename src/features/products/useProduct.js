import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../services/apiProducts.js';

export function useProduct() {
  const { carID } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ['products', 'product', carID],
    queryFn: () => getProduct(carID),
  });

  return { data, isLoading };
}
