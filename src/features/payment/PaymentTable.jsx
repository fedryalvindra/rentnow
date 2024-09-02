import Table from '../../ui/Table.jsx';
import PaymentRow from './PaymentRow.jsx';

function PaymentTable({ payments }) {
  return (
    <Table columns="1fr auto">
      <Table.Header>
        <Table.Row position="">Payment</Table.Row>
        <Table.Row></Table.Row>
      </Table.Header>
      <Table.Body>
        {payments?.map((payment) => (
          <PaymentRow key={payment.id} payment={payment} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default PaymentTable;
