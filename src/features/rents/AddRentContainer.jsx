import BackButton from '../../ui/BackButton.jsx';
import Heading from '../../ui/Heading.jsx';
import PagesLayout from '../../ui/PagesLayout.jsx';
import AddRentForm from './AddRentForm.jsx';

function AddRentContainer() {
  return (
    <PagesLayout>
      <BackButton />
      <div className="space-y-3 pt-5">
        <Heading>Create rent</Heading>
        <AddRentForm />
      </div>
    </PagesLayout>
  );
}

export default AddRentContainer;
