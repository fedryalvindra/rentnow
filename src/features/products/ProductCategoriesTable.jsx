import Table from '../../ui/Table.jsx';
import ProductCategoriesRow from './ProductCategoriesRow.jsx';

const tempData = [
  {
    id: 1,
    categoryName: 'Shoes',
  },
  {
    id: 2,
    categoryName: 'Jacket',
  },
  {
    id: 3,
    categoryName: 'Shirt',
  },
  {
    id: 4,
    categoryName: 'Hoodie',
  },
];

function ProductCategoriesTable() {
  return (
    <Table columns="1fr auto">
      <Table.Header>
        <Table.Row position="">Category</Table.Row>
        <Table.Row></Table.Row>
      </Table.Header>
      <Table.Body>
        {tempData.map((item) => (
          <ProductCategoriesRow item={item} key={item.id} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProductCategoriesTable;
