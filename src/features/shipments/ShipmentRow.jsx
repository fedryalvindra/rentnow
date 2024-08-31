import { useNavigate } from 'react-router-dom';
import Buttons from '../../ui/Buttons.jsx';
import DeleteButton from '../../ui/DeleteButton.jsx';
import { useModalContext } from '../../ui/DeleteModal.jsx';
import Table from '../../ui/Table.jsx';
import { useUpdateShipment } from './useUpdateShipment.js';

function ShipmentRow({ shipment, totalTypes }) {
  const navigate = useNavigate();
  const { dispatch } = useModalContext();
  const { shipmentName } = shipment;
  const { mutate: updateShipment, isPending: isLoadingUpdateShipment } =
    useUpdateShipment();

  const handleUpdate = (e, shipment) => {
    if (e.target.value.length < 1) return;
    updateShipment({ ...shipment, shipmentName: e.target.value });
  };

  return (
    <Table.Col>
      <div
        className="content-center"
        onClick={(e) => e.target === e.currentTarget && navigate(`/shipments/${shipment.id}`)}
      >
        <input
          className="w-2/6 focus:outline-none focus:ring-0"
          defaultValue={shipmentName}
          type="text"
          onBlur={(e) => handleUpdate(e, shipment)}
          disabled={isLoadingUpdateShipment}
        />
      </div>
      <div className="flex items-center gap-10">
        <div>{totalTypes < 1 ? '-' : `${totalTypes} types`}</div>
        <Buttons>
          <DeleteButton
            onClick={() => {
              dispatch({
                type: 'admin/openModal',
                payload: {
                  title: 'Delete',
                  content: `Are you sure want to delete ${shipment.shipmentName}?`,
                  id: shipment.id,
                  type: 'shipment',
                },
              });
            }}
          />
        </Buttons>
      </div>
    </Table.Col>
  );
}

export default ShipmentRow;
