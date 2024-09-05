import Buttons from '../../ui/Buttons.jsx';
import DeleteButton from '../../ui/DeleteButton.jsx';
import { useModalContext } from '../../ui/Modal.jsx';
import Table from '../../ui/Table.jsx';
import { useUpdateCategory } from './useUpdateCategory.js';

function ProductCategoriesRow({ item }) {
  const { dispatch } = useModalContext();
  const { mutate: updateCategory, isPending: isLoadingCategory } =
    useUpdateCategory();

  const handleUpdate = (e, item) => {
    if (e.target.value.length < 1) return;
    updateCategory({ ...item, categoryName: e.target.value });
  };

  return (
    <Table.Col>
      <input
        className="focus:outline-none focus:ring-0"
        defaultValue={item.categoryName}
        type="text"
        onBlur={(e) => handleUpdate(e, item)}
        disabled={isLoadingCategory}
      />
      <Buttons>
        <DeleteButton
          onClick={() => {
            dispatch({
              type: 'admin/openModal',
              payload: {
                title: 'Delete',
                content: `Are you sure want to delete ${item.categoryName}?`,
                id: item.id,
                type: 'category',
              },
            });
          }}
        />
      </Buttons>
    </Table.Col>
  );
}

export default ProductCategoriesRow;
