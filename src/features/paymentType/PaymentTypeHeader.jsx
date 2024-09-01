import { useState } from 'react';
import Heading from '../../ui/Heading.jsx';
import Input from '../../ui/Input.jsx';

function PaymentTypeHeader() {
  const [paymentType, setPaymentType] = useState('');

  const handleSubmit = (e) => {};
  
  return (
    <div className="flex flex-col space-y-2">
      <Heading>Payment Type</Heading>
      <Input
        handleSubmit={handleSubmit}
        value={paymentType}
        setValue={setPaymentType}
        // isLoading={isLoadingCreateShipment}
        placeholder="Type name"
        button="Payment Type"
      />
    </div>
  );
}

export default PaymentTypeHeader;
