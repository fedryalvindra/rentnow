import Buttons from '../../ui/Buttons.jsx';
import DeleteButton from '../../ui/DeleteButton.jsx';
import EditButton from '../../ui/EditButton.jsx';
import Table from '../../ui/Table.jsx';

function ProductRow({
  item: {
    productName,
    productImageURL,
    stock,
    productPrice,
    discount,
    Category: { categoryName },
  },
}) {
  return (
    <Table.Col>
      <div className="flex items-center justify-between">
        <img
          className="h-5 w-full content-center bg-white object-scale-down sm:h-7 lg:h-12 xl:h-14"
          src={productImageURL}
          alt={productName}
        />
      </div>
      <div className="content-center text-center">{productName}</div>
      <div className="content-center text-center">{categoryName}</div>
      <div className="content-center text-center">{stock}</div>
      <div className="content-center text-center"> Rp. {productPrice}</div>
      <div
        className={`content-center text-center ${discount > 0 && 'text-green-400'}`}
      >
        {discount > 0 ? `Rp. ${discount}` : '-'}
      </div>
      <Buttons>
        <DeleteButton />
        <EditButton />
      </Buttons>
    </Table.Col>
  );
}

export default ProductRow;
