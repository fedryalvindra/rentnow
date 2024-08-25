import Table from '../../ui/Table.jsx';
import TransactionsRows from './TransactionsRows.jsx';

const tempData = [
  {
    id: 1,
    recipientName: 'Fedry Alvindra',
    email: 'fedryalvindra@gmail.com',
    transactionDate: '01-12-2024',
    shipmentEstimatedArrived: 2,
    status: 'unconfirmed',
    totalPrice: 1200000,
  },
  {
    id: 2,
    recipientName: 'Fedry Alvindra',
    email: 'fedryalvindra@gmail.com',
    transactionDate: '01-12-2024',
    shipmentEstimatedArrived: 2,
    status: 'unconfirmed',
    totalPrice: 1200000,
  },
  {
    id: 3,
    recipientName: 'Fedry Alvindra',
    email: 'fedryalvindra@gmail.com',
    transactionDate: '01-12-2024',
    shipmentEstimatedArrived: 2,
    status: 'sent',
    totalPrice: 1200000,
  },
  {
    id: 4,
    recipientName: 'Fedry Alvindra',
    email: 'fedryalvindra@gmail.com',
    transactionDate: '01-12-2024',
    shipmentEstimatedArrived: 2,
    status: 'paid',
    totalPrice: 1200000,
  },
  {
    id: 5,
    recipientName: 'Fedry Alvindra',
    email: 'fedryalvindra@gmail.com',
    transactionDate: '01-12-2024',
    shipmentEstimatedArrived: 2,
    status: 'complete',
    totalPrice: 1200000,
  },
  {
    id: 6,
    recipientName: 'Fedry Alvindra',
    email: 'fedryalvindra@gmail.com',
    transactionDate: '01-12-2024',
    shipmentEstimatedArrived: 2,
    status: 'complete',
    totalPrice: 1200000,
  },
  {
    id: 7,
    recipientName: 'Fedry Alvindra',
    email: 'fedryalvindra@gmail.com',
    transactionDate: '01-12-2024',
    shipmentEstimatedArrived: 2,
    status: 'complete',
    totalPrice: 1200000,
  },
  {
    id: 8,
    recipientName: 'Fedry Alvindra',
    email: 'fedryalvindra@gmail.com',
    transactionDate: '01-12-2024',
    shipmentEstimatedArrived: 2,
    status: 'complete',
    totalPrice: 1200000,
  },
  {
    id: 9,
    recipientName: 'Fedry Alvindra',
    email: 'fedryalvindra@gmail.com',
    transactionDate: '01-12-2024',
    shipmentEstimatedArrived: 2,
    status: 'paid',
    totalPrice: 1200000,
  },
  {
    id: 10,
    recipientName: 'Fedry Alvindra',
    email: 'fedryalvindra@gmail.com',
    transactionDate: '30-12-2024',
    shipmentEstimatedArrived: 2,
    status: 'paid',
    totalPrice: 1200000,
  },
];

function TransactionsTable() {
  return (
    <Table columns="1fr 1fr 1fr 1fr">
      <Table.Header>
        <Table.Row>Customer</Table.Row>
        <Table.Row>Date</Table.Row>
        <Table.Row>Status</Table.Row>
        <Table.Row>Amount</Table.Row>
      </Table.Header>
      <Table.Body>
        {tempData.map((transaction) => (
          <TransactionsRows key={transaction.id} transaction={transaction} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default TransactionsTable;
