import Heading from '../../ui/Heading.jsx';
import PagesLayout from '../../ui/PagesLayout.jsx';
import CustomerForm from './CustomerForm.jsx';

function CustomersContainer() {
  return (
    <PagesLayout>
      <div className="space-y-4">
        <Heading>Create a new customer</Heading>
        <CustomerForm />
      </div>
    </PagesLayout>
  );
}

export default CustomersContainer;
