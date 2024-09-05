import RentCustomerInformation from './RentCustomerInformation.jsx';
import RentForm from './RentForm.jsx';

function EditRentForm({ rent, cars }) {
  const { Customer } = rent;
  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <h1 className="font-semibold lg:text-lg">
          Customer Information
        </h1>
        <RentCustomerInformation customer={Customer} />
      </div>
      <div className="space-y-2">
        <h1 className="font-semibold lg:text-lg">
          Rent Information
        </h1>
        <RentForm rent={rent} cars={cars} />
      </div>
    </div>
  );
}

export default EditRentForm;
