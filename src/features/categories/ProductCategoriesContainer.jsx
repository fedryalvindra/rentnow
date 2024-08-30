import { useCategory } from './useCategory.js';
import ProductCategoriesHeader from './ProductCategoriesHeader.jsx';
import ProductCategoriesTable from './ProductCategoriesTable.jsx';
import DeleteModal from '../../ui/DeleteModal.jsx';
import TableLoading from '../../ui/TableLoading.jsx';

function ProductCategoriesContainer() {
  const { data: categories, isLoading: isLoadingCategories } = useCategory();

  return (
    <DeleteModal>
      <div className="w-4/5 space-y-2 lg:w-3/6 xl:space-y-3">
        <ProductCategoriesHeader isLoadingCategories={isLoadingCategories} />
        {isLoadingCategories ? (
          <TableLoading type="categories" count={2} />
        ) : (
          <>
            <ProductCategoriesTable categories={categories} />
          </>
        )}
      </div>
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

export default ProductCategoriesContainer;
