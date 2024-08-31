import Table from '../../ui/Table.jsx';
import ShipmentTypeRow from './ShipmentTypeRow.jsx';

function ShipmentTypeTable({ shipmentTypes }) {
  return (
    <Table columns="1fr 1fr 1fr">
      <Table.Header>
        <Table.Row position="">Shipment Type</Table.Row>
        <Table.Row position="">Shipment Price</Table.Row>
        <Table.Row position="">Estimated arrived</Table.Row>
      </Table.Header>
      <Table.Body>
        {shipmentTypes?.map((shipmentType) => (
          <ShipmentTypeRow shipmentTypes={shipmentType} key={shipmentType.id} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ShipmentTypeTable;
