
import TableLoading from '../../ui/TableLoading.jsx';
import ShipmentHeader from './ShipmentHeader.jsx';
import ShipmentTable from './ShipmentTable.jsx';
import { useShipments } from './useShipments.js';

function ShipmentContainer() {
  const { data, isLoading: isLoadingShipments } = useShipments();

  return (
    <section className="space-y-5 p-4 md:w-11/12 xl:w-10/12 xl:space-y-2 xl:p-6 2xl:w-9/12">
      <div className="w-4/5 space-y-2 lg:w-3/6 xl:space-y-3">
        <ShipmentHeader />
        {isLoadingShipments ? (
          <TableLoading type="shipments" count={2} />
        ) : (
          <ShipmentTable data={data} />
        )}
      </div>
    </section>
  );
}

export default ShipmentContainer;
