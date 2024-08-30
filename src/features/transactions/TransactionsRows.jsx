import { HiArrowNarrowRight } from 'react-icons/hi';
import Table from '../../ui/Table.jsx';

function TransactionsRows({ transaction }) {
  const statusColor = {
    complete: 'bg-green-300 text-green-600',
    unconfirmed: 'bg-sky-300 text-sky-600',
    sent: 'bg-orange-300 text-orange-600',
    paid: 'bg-yellow-300 text-yellow-600',
  };

  return (
    <Table.Col>
      <div className="content-center">
        <h1 className="font-semibold md:text-sm">
          {transaction.recipientName}
        </h1>
        <p>{transaction.email}</p>
      </div>
      <div className="flex items-center justify-between">
        {transaction.transactionDate} <HiArrowNarrowRight />{' '}
        {transaction.transactionDate}
      </div>
      <div className="flex items-center justify-center">
        <h1
          className={`rounded-md ${statusColor[transaction.status]} p-1 font-semibold sm:px-2 md:rounded-full md:px-4 lg:px-6 text-[5px] sm:text-[8px] lg:text-xs`}
        >
          {transaction.status.toUpperCase()}
        </h1>
      </div>
      <div className="content-center text-center">
        Rp. {transaction.totalPrice}
      </div>
    </Table.Col>
  );
}

export default TransactionsRows;
