import Table from '../../ui/Table.jsx';
import ReservationsRows from './ReservationsRows.jsx';
import TransactionsRows from './ReservationsRows.jsx';

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
    status: 'rented',
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

function ReservationsTable() {
  return (
    <Table columns="1fr 1fr 1fr 1fr">
      <Table.Header>
        <Table.Row>CUSTOMER</Table.Row>
        <Table.Row>DATE</Table.Row>
        <Table.Row>STATUS</Table.Row>
        <Table.Row>AMOUNT</Table.Row>
      </Table.Header>
      <Table.Body>
        {tempData.map((reservation) => (
          <ReservationsRows key={reservation.id} reservation={reservation} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ReservationsTable;
