import Buttons from '../../ui/Buttons.jsx';
import DeleteButton from '../../ui/DeleteButton.jsx';
import EditButton from '../../ui/EditButton.jsx';
import { useModalContext } from '../../ui/DeleteModal.jsx';
import Table from '../../ui/Table.jsx';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const { dispatch } = useModalContext();
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
            dispatch({
              type: 'admin/openModal',
              payload: {
                title: 'Delete',
                content: `Are you sure want to delete ${productName}?`,
                id: id,
                type: 'product',
              },
            });
          }}
        />
        <EditButton onClick={() => navigate(`${id}`)} />
      </Buttons>
    </Table.Col>
  );
}

export default ProductRow;
