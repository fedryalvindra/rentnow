import Table from '../../ui/Table.jsx';
import ShipmentRow from './ShipmentRow.jsx';

function ShipmentTable({ data }) {
  const { data: shipments, totalTypes } = data;
  return (
    <Table columns="1fr auto">
      <Table.Header>
        <Table.Row position="">Shipment</Table.Row>
        <Table.Row></Table.Row>
      </Table.Header>
      <Table.Body>
        {shipments?.map((shipment, i) => (
          <ShipmentRow shipment={shipment} key={shipment.id} totalTypes={totalTypes[i]}/>
        ))}
      </Table.Body>
    </Table>
  );
}

export default ShipmentTable;
