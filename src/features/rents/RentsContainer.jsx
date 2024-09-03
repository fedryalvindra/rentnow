import Empty from '../../ui/Empty.jsx';
import PagesLayout from '../../ui/PagesLayout.jsx';
import TableLoading from '../../ui/TableLoading.jsx';
import RentsHeader from './RentsHeader.jsx';
import RentsTable from './RentsTable.jsx';
import { useRents } from './useRents.js';

function RentsContainer() {
  const { data: rents, isLoading: isLoadingRents } = useRents();
  return (
    <PagesLayout>
      <RentsHeader />
      {isLoadingRents ? (
        <TableLoading type="rents" count={10} />
      ) : !rents.length ? (
        <Empty data="rents" />
      ) : (
        <RentsTable rents={rents} />
      )}
    </PagesLayout>
  );
}

export default RentsContainer;
