import Buttons from '../../ui/Buttons.jsx';
import DeleteButton from '../../ui/DeleteButton.jsx';
import EditButton from '../../ui/EditButton.jsx';
import { useModalContext } from '../../ui/Modal.jsx';
import Table from '../../ui/Table.jsx';
import { useNavigate } from 'react-router-dom';
import { formattedCurrency } from '../../helpers/currencyValidation.js';

function ProductRow({
  item: {
    id,
    carName,
    carImageURL,
    status,
    carPrice,
    discount,
    plateNumber,
    Category: { categoryName },
  },
}) {
  const navigate = useNavigate();
  const { dispatch } = useModalContext();

  const statusStyles = {
    available:
      'bg-green-300 text-green-600 hover:bg-green-400 transition-all duration-300 ease-in',
    unavailable:
      'bg-gray-200 text-gray-600 hover:bg-gray-300 transition-all duration-300 ease-in',
    maintenance:
      'bg-sky-300 text-sky-600 hover:bg-sky-400 transition-all duration-300 ease-in',
  };

  return (
    <Table.Col>
      <div className="flex items-center justify-between">
        <img
          className="h-5 w-full content-center bg-white object-scale-down sm:h-7 lg:h-12 xl:h-14"
          src={carImageURL}
          alt={carName}
        />
      </div>
      <div className="content-center text-center">{carName}</div>
      <div className="content-center text-center font-semibold">
        {plateNumber}
      </div>
      <div className="flex items-center justify-center md:text-[10px] lg:text-xs">
        <div
          className={`rounded-sm ${statusStyles[status]} px-2 text-center font-semibold sm:rounded-md lg:rounded-full lg:px-4 xl:py-[2px]`}
        >
          {status.toUpperCase()}
        </div>
      </div>
      <div className="content-center text-center">{categoryName}</div>
      <div className="content-center text-center">
        {' '}
        Rp {formattedCurrency(carPrice)}
      </div>
      <div
        className={`content-center text-center ${discount > 0 && 'font-semibold text-green-400'}`}
      >
        {discount > 0 ? `Rp ${formattedCurrency(discount)}` : '-'}
      </div>
      <Buttons>
        <DeleteButton
          onClick={() => {
            dispatch({
              type: 'admin/openModal',
              payload: {
                title: 'Delete',
                content: `Are you sure want to delete ${carName}?`,
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
