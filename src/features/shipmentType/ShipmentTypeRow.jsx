import Buttons from '../../ui/Buttons.jsx';
import DeleteButton from '../../ui/DeleteButton.jsx';
import { useModalContext } from '../../ui/DeleteModal.jsx';
import Table from '../../ui/Table.jsx';
import { useUpdateShipmentType } from './useUpdateShipmentType.js';

function ShipmentTypeRow({ shipmentTypes }) {
  const { dispatch } = useModalContext();
  const { mutate: updateShipmentType, isPending: isLoadingUpdateShipmentType } =
    useUpdateShipmentType();
  const { id, shipmentType, shipmentEstimatedArrived, shipmentPrice } =
    shipmentTypes;

  const handleUpdate = (e, field) => {
    if (e.target.value.length < 1) return;
    if (field?.shipmentPrice < 500) return;
    if (field?.shipmentEstimatedArrived < 0) return;
    updateShipmentType({ field, id });
  };
  return (
    <Table.Col>
      <div className="content-center">
        <input
          className="w-3/5 focus:outline-none"
          defaultValue={shipmentType}
          disabled={isLoadingUpdateShipmentType}
          type="text"
          autoComplete="off"
          onBlur={(e) => handleUpdate(e, { shipmentType: e.target.value })}
        />
      </div>
      <div className="content-center">
        <input
          className="w-3/5 focus:outline-none"
          defaultValue={shipmentPrice}
          type="number"
          autoComplete="off"
          onBlur={(e) => handleUpdate(e, { shipmentPrice: e.target.value })}
        />
      </div>
      <div className="flex items-center justify-end gap-2 lg:gap-10">
        <div className="w-3 lg:w-4">
          <input
            className="w-fit focus:outline-none"
            defaultValue={shipmentEstimatedArrived}
            disabled={isLoadingUpdateShipmentType}
            type="number"
            autoComplete="off"
            onBlur={(e) =>
              handleUpdate(e, { shipmentEstimatedArrived: e.target.value })
            }
          />
        </div>
        <Buttons>
          <DeleteButton
            onClick={() => {
              dispatch({
                type: 'admin/openModal',
                payload: {
                  title: 'Delete',
                  content: `Are you sure want to delete ${shipmentType}?`,
                  id: id,
                  type: 'shipmentType',
                },
              });
            }}
          />
        </Buttons>
      </div>
    </Table.Col>
  );
}

export default ShipmentTypeRow;
