import { useState } from 'react';
import Heading from '../../ui/Heading.jsx';
import Input from '../../ui/Input.jsx';
import { useCreatePaymentType } from './useCreatePaymentType.js';

function PaymentTypeHeader() {
  const [paymentType, setPaymentType] = useState('');
  const { mutate: createPaymentType, isPending: isLoadingCreatePaymentType } =
    useCreatePaymentType();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentType.length < 1) return;
    createPaymentType(paymentType);
  };

  return (
    <div className="flex flex-col space-y-2">
      <Heading>Payment Type</Heading>
      <Input
        handleSubmit={handleSubmit}
        value={paymentType}
        setValue={setPaymentType}
        isLoading={isLoadingCreatePaymentType}
        placeholder="Type name"
        button="Payment Type"
      />
    </div>
  );
}

export default PaymentTypeHeader;
