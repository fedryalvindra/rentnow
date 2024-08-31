import { useState } from 'react';
import Heading from '../../ui/Heading.jsx';
import Input from '../../ui/Input.jsx';
import { useCreateShipment } from './useCreateShipment.js';

function ShipmentHeader() {
  const [shipmentName, setShipmentName] = useState('');
  const { mutate: createShipment, isPending: isLoadingCreateShipment } =
    useCreateShipment();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (shipmentName < 1) return;
    createShipment(shipmentName);
    setShipmentName('');
  };

  return (
    <div className="flex flex-col space-y-2">
      <Heading>Shipments</Heading>
      <Input
        handleSubmit={handleSubmit}
        value={shipmentName}
        setValue={setShipmentName}
        isLoading={isLoadingCreateShipment}
        placeholder="Shipment name"
      />
    </div>
  );
}

export default ShipmentHeader;
