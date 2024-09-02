import Table from '../../ui/Table.jsx';
import ProductRow from './ProductRow.jsx';

function ProductTable({ products }) {
  return (
    <>
      <Table columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr">
        <Table.Header>
          <Table.Row>CAR</Table.Row>
          <Table.Row></Table.Row>
          <Table.Row>PLATE</Table.Row>
          <Table.Row>STATUS</Table.Row>
          <Table.Row>CATEGORY</Table.Row>
          <Table.Row>PRICE</Table.Row>
          <Table.Row>DISCOUNT</Table.Row>
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
