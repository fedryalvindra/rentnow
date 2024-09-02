import BackButton from '../../ui/BackButton.jsx';
import Empty from '../../ui/Empty.jsx';
import PagesLayout from '../../ui/PagesLayout.jsx';
import TableLoading from '../../ui/TableLoading.jsx';
import PaymentHeader from './PaymentHeader.jsx';
import PaymentTable from './PaymentTable.jsx';
import { usePayments } from './usePayments.js';

function PaymentContainer() {
  const { data: payments, isLoading: isLoadingPayments } = usePayments();
  
  return (
    <PagesLayout>
      <BackButton />
      <div className="w-4/5 space-y-2 lg:w-3/6 xl:space-y-3">
        <PaymentHeader />
        {!payments?.length && !isLoadingPayments ? (
          <Empty data="Payment" />
        ) : isLoadingPayments ? (
          <TableLoading type="payments" count={1} />
        ) : (
          <PaymentTable payments={payments} />
        )}
      </div>
    </PagesLayout>
  );
}

export default PaymentContainer;
