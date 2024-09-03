import { useQuery } from '@tanstack/react-query';
import ProductHeader from './ProductHeader.jsx';
import ProductTable from './ProductTable.jsx';
import { getProducts } from '../../services/apiCars.js';
import { useDeleteProduct } from './useDeleteProduct.js';
import Empty from '../../ui/Empty.jsx';
import TableLoading from '../../ui/TableLoading.jsx';

function ProductsContainer() {
  const { data: products, isLoading: isLoadingProducts } = useQuery({
    queryFn: getProducts,
    queryKey: ['products'],
  });

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
