import ProductCategoriesHeader from './ProductCategoriesHeader.jsx';
import ProductCategoriesTable from './ProductCategoriesTable.jsx';
import ProductHeader from './ProductHeader.jsx';
import ProductTable from './ProductTable.jsx';

function ProductsContainer() {
  return (
    <section className="space-y-5 p-4 md:w-11/12 xl:w-10/12 xl:space-y-2 xl:p-6 2xl:w-9/12">
      <div className="space-y-6">
        <div className="w-5/6 space-y-2">
          <ProductCategoriesHeader />
          <ProductCategoriesTable />
        </div>
        <div className="space-y-1">
          <ProductHeader />
          <ProductTable />
        </div>
      </div>
    </section>
  );
}

export default ProductsContainer;
