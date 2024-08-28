import Table from '../../ui/Table.jsx';
import ProductCategoriesRow from './ProductCategoriesRow.jsx';

function ProductCategoriesTable({ categories }) {
  return (
    <Table columns="1fr auto">
      <Table.Header>
        <Table.Row position="">Category</Table.Row>
        <Table.Row></Table.Row>
      </Table.Header>
      <Table.Body>
        {categories?.map((item) => (
          <ProductCategoriesRow item={item} key={item.id} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProductCategoriesTable;
