import PagesLayout from '../../ui/PagesLayout.jsx';
import TransactionsHeader from './TransactionsHeader.jsx';
import TransactionsTable from './TransactionsTable.jsx';

function TransactionsContainer() {
  return (
    <PagesLayout>
      <TransactionsHeader />
      <TransactionsTable />
    </PagesLayout>
  );
}

export default TransactionsContainer;
