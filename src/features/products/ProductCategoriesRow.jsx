import Buttons from '../../ui/Buttons.jsx';
import DeleteButton from '../../ui/DeleteButton.jsx';
import EditButton from '../../ui/EditButton.jsx';
import Table from '../../ui/Table.jsx';

function ProductCategoriesRow({ item }) {
  return (
    <Table.Col>
      <div className="content-center">{item.categoryName}</div>
      <Buttons>
        <DeleteButton />
        <EditButton />
      </Buttons>
    </Table.Col>
  );
}

export default ProductCategoriesRow;
