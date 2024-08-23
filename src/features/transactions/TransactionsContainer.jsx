import TransactionsHeader from './TransactionsHeader.jsx';
import TransactionsTable from './TransactionsTable.jsx';

function TransactionsContainer() {
  return (
    <div className="space-y-5 p-2 md:w-11/12 xl:w-10/12 xl:space-y-2 xl:p-6 2xl:w-9/12">
      <TransactionsHeader />
      <TransactionsTable />
    </div>
  );
}

export default TransactionsContainer;
