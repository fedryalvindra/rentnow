import Empty from '../../ui/Empty.jsx';
import PagesLayout from '../../ui/PagesLayout.jsx';
import TableLoading from '../../ui/TableLoading.jsx';
import PaymentTypeHeader from './PaymentTypeHeader.jsx';
import PaymentTypeTable from './PaymentTypeTable.jsx';
import { usePaymentTypes } from './usePaymentTypes.js';

function PaymentTypeContainer() {
  const { data: paymentTypeObj, isLoading: isLoadingPaymentTypes } =
    usePaymentTypes();

  return (
    <PagesLayout>
      <div className="w-4/5 space-y-2 lg:w-3/6 xl:space-y-3">
        <PaymentTypeHeader />
        {isLoadingPaymentTypes ? (
          <TableLoading type="paymentTypes" count={2} />
        ) : !paymentTypeObj ? (
          <Empty data="Payment type" />
        ) : (
          <PaymentTypeTable paymentTypeObj={paymentTypeObj} />
        )}
      </div>
    </PagesLayout>
  );
}

export default PaymentTypeContainer;
