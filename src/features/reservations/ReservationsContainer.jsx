import PagesLayout from '../../ui/PagesLayout.jsx';
import ReservationsHeader from './ReservationsHeader.jsx';
import ReservationsTable from './ReservationsTable.jsx';

function ReservationContainer() {
  return (
    <PagesLayout>
      <ReservationsHeader />
      <ReservationsTable />
    </PagesLayout>
  );
}

export default ReservationContainer;
