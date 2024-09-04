import { HiArrowNarrowRight } from 'react-icons/hi';
import Table from '../../ui/Table.jsx';
import { formattedDate } from '../../helpers/dateValidation.js';
import { formattedCurrency } from '../../helpers/currencyValidation.js';
import { useNavigate } from 'react-router-dom';

function RentsRow({ rent }) {
  const {
    id,
    startDate,
    endDate,
    totalPrice,
    status,
    Customer: { fullName, email },
    Car: { carName, carImageURL },
  } = rent;
  const statusColor = {
    complete:
      'bg-green-300 text-green-600 hover:bg-green-400 transition-all duration-300 ease-in',
    unconfirmed:
      'bg-sky-300 text-sky-600 hover:bg-sky-400 transition-all duration-300 ease-in',
    rented:
      'bg-orange-300 text-orange-600 hover:bg-orange-400 transition-all duration-300 ease-in',
    paid: 'bg-yellow-300 text-yellow-600 hover:bg-yellow-400 transition-all duration-300 ease-in',
  };

  const navigate = useNavigate();

  return (
    <Table.Col onClick={() => navigate(`/rents/${id}`)}>
      <img
        className="h-5 w-full content-center bg-white object-scale-down sm:h-7 lg:h-12 xl:h-14"
        src={carImageURL}
        alt={carName}
      />
      <div className="content-center">
        <h1 className="font-semibold md:text-sm">{fullName}</h1>
        <p>{email}</p>
      </div>

      <div className="flex items-center justify-between">
        {formattedDate(startDate)} <HiArrowNarrowRight />{' '}
        {formattedDate(endDate)}
      </div>
      <div className="flex items-center justify-center">
        <h1
          className={`rounded-md ${statusColor[status]} p-1 text-[5px] font-bold sm:px-2 sm:text-[8px] md:rounded-full md:px-4 lg:px-6 lg:text-xs`}
        >
          {rent.status.toUpperCase()}
        </h1>
      </div>
      <div className="content-center text-center">
        Rp {formattedCurrency(totalPrice)}
      </div>
    </Table.Col>
  );
}

export default RentsRow;
