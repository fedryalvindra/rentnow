import ProductHeader from './ProductHeader.jsx';
import ProductTable from './ProductTable.jsx';
import { useDeleteProduct } from './useDeleteProduct.js';
import Empty from '../../ui/Empty.jsx';
import TableLoading from '../../ui/TableLoading.jsx';
import { useProducts } from './useProducts.js';

function ProductsContainer() {
  const { data: products, isLoading: isLoadingProducts } = useProducts();

  const { isPending: isDeletingProduct } = useDeleteProduct();

  return (
    <>
      <ProductHeader />
      {isLoadingProducts || isDeletingProduct ? (
        <TableLoading type="products" count={10} />
      ) : products.length ? (
        <ProductTable products={products} />
      ) : (
        <Empty data="car" />
      )}
    </>
  );
}

export default ProductsContainer;
