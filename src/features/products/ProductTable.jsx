import Table from '../../ui/Table.jsx';
import ProductRow from './ProductRow.jsx';

const tempData = [
  {
    id: 1,
    productName: 'Adidas Shoes',
    categoryName: 'Shoes',
    stock: 100,
    productPrice: 600000,
    discount: 10000,
    productImageURL:
      'http://upload.wikimedia.org/wikipedia/commons/a/ae/An_Adidas_shoe.jpg',
  },
  {
    id: 2,
    productName: 'Varsity Jacket',
    categoryName: 'Jacket',
    stock: 100,
    productPrice: 600000,
    discount: 10000,
    productImageURL:
      'https://tse3.mm.bing.net/th?id=OIP.7qQt37RC_CFZR2txJIa5jQHaIt&pid=Api&P=0&h=180',
  },
];

function ProductTable() {
  return (
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
        {tempData.map((item) => (
          <ProductRow key={item.id} item={item} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProductTable;
