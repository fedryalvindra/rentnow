import Buttons from '../../ui/Buttons.jsx';
import DeleteButton from '../../ui/DeleteButton.jsx';
import Table from '../../ui/Table.jsx';

function ShipmentTypeRow({ shipmentTypes }) {
  const { shipmentType, shipmentEstimatedArrived, shipmentPrice } =
    shipmentTypes;

  return (
    <Table.Col>
      <div className="content-center">{shipmentType}</div>
      <div className="content-center">{shipmentPrice}</div>
      <div className="flex items-center justify-between">
        {shipmentEstimatedArrived}
        <Buttons>
          <DeleteButton />
        </Buttons>
      </div>
    </Table.Col>
  );
}

export default ShipmentTypeRow;
