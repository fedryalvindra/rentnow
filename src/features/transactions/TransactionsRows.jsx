import { HiArrowNarrowRight } from 'react-icons/hi';
import Table from '../../ui/Table.jsx';

function TransactionsRows({ transaction }) {
  const statusColor = {
    complete: 'bg-green-300',
    unconfirmed: 'bg-gray-300',
    sent: 'bg-orange-300',
    paid: 'bg-yellow-300',
  };

  return (
    <Table.Col>
      <div className="content-center">
        <h1 className="md:text-sm lg:text-base">{transaction.recipientName}</h1>
        <p>{transaction.email}</p>
      </div>
      <div className="flex items-center justify-between">
        {transaction.transactionDate} <HiArrowNarrowRight />{' '}
        {transaction.transactionDate}
      </div>
      <div className="flex items-center justify-center">
        <h1
          className={`rounded-md ${statusColor[transaction.status]} p-1 sm:px-2 md:rounded-full md:px-4 lg:px-6`}
        >
          {transaction.status}
        </h1>
      </div>
      <div className="content-center text-center">
        Rp. {transaction.totalPrice}
      </div>
    </Table.Col>
  );
}

export default TransactionsRows;
