import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../../services/apiCategory.js';

export function useCategory() {
  const { data, isLoading } = useQuery({
    queryFn: getCategories,
    queryKey: ['categories'],
  });

  return { data, isLoading };
}
