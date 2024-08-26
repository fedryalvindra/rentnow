import Table from '../../ui/Table.jsx';
import ProductRow from './ProductRow.jsx';

function ProductTable({ products }) {
  return (
    <>
      <Table columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr">
        <Table.Header>
          <Table.Row>Product</Table.Row>
          <Table.Row></Table.Row>
          <Table.Row>Category</Table.Row>
          <Table.Row>Stock</Table.Row>
          <Table.Row>Price</Table.Row>
          <Table.Row>Discount</Table.Row>
          <Table.Row></Table.Row>
        </Table.Header>
        <Table.Body>
          {products?.map((item) => (
            <ProductRow key={item.id} item={item} />
          ))}
        </Table.Body>
      </Table>
    </>
  );
}

export default ProductTable;
