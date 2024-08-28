import PageSpinner from '../../ui/PageSpinner.jsx';
import ProductNavBar from '../../ui/ProductNavBar.jsx';
import { useCategory } from './useCategory.js';
import ProductCategoriesHeader from './ProductCategoriesHeader.jsx';
import ProductCategoriesTable from './ProductCategoriesTable.jsx';

function ProductCategoriesContainer() {
  const { data: categories, isLoading: isLoadingCategories } = useCategory();

  if (isLoadingCategories) return <PageSpinner />;

  return (
    <section className="space-y-5 p-4 md:w-11/12 xl:w-10/12 xl:space-y-2 xl:p-6 2xl:w-9/12">
      <div className="space-y-6 md:space-y-8 xl:space-y-10">
        <ProductNavBar />
        <div className="w-5/6 space-y-2 sm:w-4/6 md:w-4/5 xl:w-4/5 xl:space-y-4 2xl:w-3/5">
          <ProductCategoriesHeader />
          <ProductCategoriesTable categories={categories} />
        </div>
      </div>
    </section>
  );
}

export default ProductCategoriesContainer;
