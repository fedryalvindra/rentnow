import Table from '../../ui/Table.jsx';
import PaymentTypeRow from './PaymentTypeRow.jsx';

function PaymentTypeTable({ paymentTypeObj }) {
  const { data: paymentTypes, totalTypes } = paymentTypeObj;

  console.log(paymentTypes);
  return (
    <Table columns="1fr auto">
      <Table.Header>
        <Table.Row position="">Payment Type</Table.Row>
        <Table.Row></Table.Row>
      </Table.Header>
      <Table.Body>
        {paymentTypes?.map((paymentType, i) => (
          <PaymentTypeRow
            key={paymentType?.id}
            paymentType={paymentType}
            totalTypes={totalTypes[i]}
          />
        ))}
      </Table.Body>
    </Table>
  );
}

export default PaymentTypeTable;
