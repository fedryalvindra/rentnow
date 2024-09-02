import { useState } from 'react';
import Heading from '../../ui/Heading.jsx';
import Input from '../../ui/Input.jsx';
import { usePaymentType } from '../paymentType/usePaymentType.js';
import Skeleton from 'react-loading-skeleton';
import { useCreatePayment } from './useCreatePayment.js';

function PaymentHeader() {
  const [payment, setPayment] = useState();
  const { data: paymentType, isLoading: isLoadingPaymentType } =
    usePaymentType();

  const { mutate: createPayment, isLoading: isLoadingCreatePayment } =
    useCreatePayment();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (payment.length < 1) return;
    createPayment(payment);
    setPayment('');
  };

  return (
    <div className="flex flex-col space-y-2">
      {isLoadingPaymentType ? (
        <Skeleton className="h-full w-40 p-1" />
      ) : (
        <Heading>{paymentType?.paymentType}</Heading>
      )}
      <Input
        handleSubmit={handleSubmit}
        value={payment}
        setValue={setPayment}
        isLoading={isLoadingCreatePayment}
        placeholder="Type name"
        button="Payment"
      />
    </div>
  );
}

export default PaymentHeader;
