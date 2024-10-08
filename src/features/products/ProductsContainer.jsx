import ProductHeader from './ProductHeader.jsx';
import ProductTable from './ProductTable.jsx';
import { useDeleteProduct } from './useDeleteProduct.js';
import Empty from '../../ui/Empty.jsx';
import TableLoading from '../../ui/TableLoading.jsx';
import { useProducts } from './useProducts.js';
import Pagination from '../../ui/Pagination.jsx';

function ProductsContainer() {
  const { data: products, isLoading: isLoadingProducts } = useProducts();

  const { isPending: isDeletingProduct } = useDeleteProduct();

  return (
    <>
      <ProductHeader />
      {isLoadingProducts || isDeletingProduct ? (
        <TableLoading type="products" count={10} />
      ) : products?.data?.length ? (
        <>
          <ProductTable products={products?.data} />
          <Pagination count={products?.count} />
        </>
      ) : (
        <Empty data="car" />
      )}
    </>
  );
}

export default ProductsContainer;
