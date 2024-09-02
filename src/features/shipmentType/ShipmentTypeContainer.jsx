import BackButton from '../../ui/BackButton.jsx';
import Empty from '../../ui/Empty.jsx';
import PagesLayout from '../../ui/PagesLayout.jsx';
import TableLoading from '../../ui/TableLoading.jsx';
import ShipmentTypeHeader from './ShipmentTypeHeader.jsx';
import ShipmentTypeTable from './ShipmentTypeTable.jsx';
import { useDeleteShipmentType } from './useDeleteShipmentType.js';
import { useShipmentType } from './useShipmentType.js';

function ShipmentTypeContainer() {
  const { data: shipmentTypes, isLoading: isLoadingShipmentTypes } =
    useShipmentType();
  const { isPending: isLoadingDeleteShipmentType } = useDeleteShipmentType();

  return (
    <PagesLayout>
      <div className="w-4/5 space-y-2 lg:w-3/6 xl:space-y-3">
        <BackButton />
        <div className="space-y-2 md:space-y-3 lg:pt-3">
          <ShipmentTypeHeader />
          {!shipmentTypes?.length && !isLoadingShipmentTypes ? (
            <Empty data="Shipment Type" />
          ) : isLoadingShipmentTypes || isLoadingDeleteShipmentType ? (
            <TableLoading type="shipments" count={1} />
          ) : (
            <ShipmentTypeTable shipmentTypes={shipmentTypes} />
          )}
        </div>
      </div>
    </PagesLayout>
  );
}

export default ShipmentTypeContainer;
