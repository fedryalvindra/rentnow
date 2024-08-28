import { useQuery } from '@tanstack/react-query';
import ProductHeader from './ProductHeader.jsx';
import ProductTable from './ProductTable.jsx';
import { getProducts } from '../../services/apiProducts.js';
import PageSpinner from '../../ui/PageSpinner.jsx';

import DeleteModal from '../../ui/DeleteModal.jsx';
import { useDeleteProduct } from './useDeleteProduct.js';
import Empty from '../../ui/Empty.jsx';
import ProductNavBar from '../../ui/ProductNavBar.jsx';

function ProductsContainer() {
  const { data: products, isLoading: isLoadingProducts } = useQuery({
    queryFn: getProducts,
    queryKey: ['products'],
  });

  const { isPending: isDeletingProduct } = useDeleteProduct();

  if (isLoadingProducts || isDeletingProduct)
    return <PageSpinner />;

  return (
    <DeleteModal>
      <section className="space-y-5 p-4 md:w-11/12 xl:w-10/12 xl:space-y-2 xl:p-6 2xl:w-9/12">
        <div className="space-y-6 md:space-y-8 xl:space-y-10">
          <ProductNavBar />
          <div className="space-y-1">
            <ProductHeader />
            {products.length ? (
              <ProductTable products={products} />
            ) : (
              <Empty data="product" />
            )}
          </div>
        </div>
      </section>
      <DeleteModal.Window>
        <DeleteModal.Body>
          <DeleteModal.Title />
          <DeleteModal.Content />
          <DeleteModal.Buttons />
        </DeleteModal.Body>
      </DeleteModal.Window>
    </DeleteModal>
  );
}

export default ProductsContainer;
