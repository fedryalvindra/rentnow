import BackButton from '../../ui/BackButton.jsx';
import PagesLayout from '../../ui/PagesLayout.jsx';
import EditRentForm from './EditRentForm.jsx';

function RentFormContainer() {
  return (
    <PagesLayout>
      <BackButton />
      <EditRentForm/>
    </PagesLayout>
  );
}

export default RentFormContainer;
