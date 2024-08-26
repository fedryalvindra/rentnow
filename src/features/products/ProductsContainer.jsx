import { useQuery } from '@tanstack/react-query';
import ProductCategoriesHeader from './ProductCategoriesHeader.jsx';
import ProductCategoriesTable from './ProductCategoriesTable.jsx';
import ProductHeader from './ProductHeader.jsx';
import ProductTable from './ProductTable.jsx';
import { getProducts } from '../../services/apiProducts.js';
import PageSpinner from '../../ui/PageSpinner.jsx';
import { useCategory } from './useCategory.js';

function ProductsContainer() {
  const { data: products, isLoading: isLoadingProducts } = useQuery({
    queryFn: getProducts,
    queryKey: ['products'],
  });

  const { data: categories, isLoading: isLoadingCategories } = useCategory();

  if (isLoadingProducts || isLoadingCategories) return <PageSpinner />;

  return (
    <section className="space-y-5 p-4 md:w-11/12 xl:w-10/12 xl:space-y-2 xl:p-6 2xl:w-9/12">
      <div className="space-y-6">
        <div className="w-5/6 space-y-2 sm:w-4/6 md:w-4/5 xl:w-3/5 2xl:w-2/5">
          <ProductCategoriesHeader />
          <ProductCategoriesTable categories={categories} />
        </div>
        <div className="space-y-1">
          <ProductHeader />
          <ProductTable products={products} />
        </div>
      </div>
    </section>
  );
}

export default ProductsContainer;
