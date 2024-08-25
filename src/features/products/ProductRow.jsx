import Buttons from '../../ui/Buttons.jsx';
import DeleteButton from '../../ui/DeleteButton.jsx';
import EditButton from '../../ui/EditButton.jsx';
import Table from '../../ui/Table.jsx';

function ProductRow({ item }) {
  return (
    <Table.Col>
      <div className="flex items-center justify-between">
        <img
          className="h-5 w-full content-center bg-white object-scale-down sm:h-7 lg:h-12 xl:h-14"
          src={item.productImageURL}
          alt={item.productName}
        />
      </div>
      <div className="content-center text-center">{item.productName}</div>
      <div className="content-center text-center">{item.categoryName}</div>
      <div className="content-center text-center">{item.stock}</div>
      <div className="content-center text-center"> Rp. {item.productPrice}</div>
      <div className="content-center text-center">Rp. {item.discount}</div>
      <Buttons>
        <DeleteButton />
        <EditButton />
      </Buttons>
    </Table.Col>
  );
}

export default ProductRow;
