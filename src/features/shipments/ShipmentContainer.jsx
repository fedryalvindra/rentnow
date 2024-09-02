import Empty from '../../ui/Empty.jsx';
import PagesLayout from '../../ui/PagesLayout.jsx';
import TableLoading from '../../ui/TableLoading.jsx';
import ShipmentHeader from './ShipmentHeader.jsx';
import ShipmentTable from './ShipmentTable.jsx';
import { useShipments } from './useShipments.js';

function ShipmentContainer() {
  const { data, isLoading: isLoadingShipments } = useShipments();
  return (
    <PagesLayout>
      <div className="w-4/5 space-y-2 lg:w-3/6 xl:space-y-3">
        <ShipmentHeader />
        {isLoadingShipments ? (
          <TableLoading type="shipments" count={2} />
        ) : !data ? (
          <Empty data="Shipment" />
        ) : (
          <ShipmentTable data={data} />
        )}
      </div>
    </PagesLayout>
  );
}

export default ShipmentContainer;
