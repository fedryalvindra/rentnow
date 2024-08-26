import Buttons from '../../ui/Buttons.jsx';
import DeleteButton from '../../ui/DeleteButton.jsx';
import EditButton from '../../ui/EditButton.jsx';
import Modal, { useModalContext } from '../../ui/DeleteModal.jsx';
import Table from '../../ui/Table.jsx';

function ProductRow({
  item: {
    id,
    productName,
    productImageURL,
    stock,
    productPrice,
    discount,
    Category: { categoryName },
  },
}) {
  const { setTitle, setIsOpen, setContent, setId, setType } = useModalContext();
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
        <DeleteButton
          onClick={() => {
            setTitle('Delete');
            setContent(`Are you sure want to delete ${productName}?`);
            setIsOpen(true);
            setId(id);
            setType('product');
          }}
        />
        <EditButton />
      </Buttons>
    </Table.Col>
  );
}

export default ProductRow;
