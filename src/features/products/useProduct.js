import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../services/apiProducts.js';

export function useProduct() {
  const { productID } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ['products', 'product', productID],
    queryFn: () => getProduct(productID),
  });

  return { data, isLoading };
}
