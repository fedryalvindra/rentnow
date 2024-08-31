import Skeleton from 'react-loading-skeleton';
import AddButton from '../../ui/AddButton.jsx';
import Heading from '../../ui/Heading.jsx';
import { useShipment } from '../shipments/useShipment.js';
import { useState } from 'react';
import ShipmentTypeForm from './ShipmentTypeForm.jsx';

function ShipmentTypeHeader() {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const { data: shipment, isLoading: isLoadingShipment } = useShipment();

  return (
    <>
      <div className="flex items-center justify-between">
        {isLoadingShipment ? (
          <Skeleton className="h-full w-40 p-1" />
        ) : (
          <Heading>{shipment?.shipmentName}</Heading>
        )}
        <AddButton
          button="type"
          disabled={isLoadingShipment}
          onClick={() => setIsOpenForm(true)}
        />
      </div>
      {isOpenForm && <ShipmentTypeForm setIsOpenForm={setIsOpenForm} />}
    </>
  );
}

export default ShipmentTypeHeader;
