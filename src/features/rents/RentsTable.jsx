import Table from '../../ui/Table.jsx';
import RentsRow from './RentsRow.jsx';

function RentsTable({ rents }) {
  return (
    <Table columns="1fr 1fr 1fr 1fr">
      <Table.Header>
        <Table.Row position="">RENT</Table.Row>
        <Table.Row>DATE</Table.Row>
        <Table.Row>STATUS</Table.Row>
        <Table.Row>AMOUNT</Table.Row>
      </Table.Header>
      <Table.Body>
        {rents?.map((rent) => (
          <RentsRow key={rent.id} rent={rent} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default RentsTable;
