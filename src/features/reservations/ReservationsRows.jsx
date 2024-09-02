import { HiArrowNarrowRight } from 'react-icons/hi';
import Table from '../../ui/Table.jsx';

function ReservationsRows({ reservation }) {
  const statusColor = {
    complete:
      'bg-green-300 text-green-600 hover:bg-green-400 transition-all duration-300 ease-in',
    unconfirmed:
      'bg-sky-300 text-sky-600 hover:bg-sky-400 transition-all duration-300 ease-in',
    rented: 'bg-orange-300 text-orange-600 hover:bg-orange-400 transition-all duration-300 ease-in',
    paid: 'bg-yellow-300 text-yellow-600 hover:bg-yellow-400 transition-all duration-300 ease-in',
  };

  return (
    <Table.Col>
      <div className="content-center">
        <h1 className="font-semibold md:text-sm">
          {reservation.recipientName}
        </h1>
        <p>{reservation.email}</p>
      </div>
      <div className="flex items-center justify-between">
        {reservation.transactionDate} <HiArrowNarrowRight />{' '}
        {reservation.transactionDate}
      </div>
      <div className="flex items-center justify-center">
        <h1
          className={`rounded-md ${statusColor[reservation.status]} p-1 text-[5px] font-bold sm:px-2 sm:text-[8px] md:rounded-full md:px-4 lg:px-6 lg:text-xs`}
        >
          {reservation.status.toUpperCase()}
        </h1>
      </div>
      <div className="content-center text-center">
        Rp. {reservation.totalPrice}
      </div>
    </Table.Col>
  );
}

export default ReservationsRows;
