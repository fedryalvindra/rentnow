import GetCustomerLoading from '../../ui/GetCustomerLoading.jsx';
import RentFormLoading from '../../ui/RentFormLoading.jsx';
import { useSelectProduct } from '../products/useSelectProduct.js';
import RentCustomerInformation from './RentCustomerInformation.jsx';
import RentForm from './RentForm.jsx';
import { useRent } from './useRent.js';

function EditRentForm() {
  const { data: rent, isLoading: isLoadingRent } = useRent();
  const { data: cars, isLoading: isLoadingCars } = useSelectProduct();

  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <h1 className="font-semibold lg:text-lg">Customer Information</h1>
        {isLoadingRent ? (
          <GetCustomerLoading />
        ) : (
          <RentCustomerInformation customer={rent.Customer} />
        )}
      </div>
      <div className="space-y-2">
        <h1 className="font-semibold lg:text-lg">Rent Information</h1>
        {isLoadingCars || isLoadingRent ? (
          <RentFormLoading />
        ) : (
          <RentForm rent={rent} cars={cars} />
        )}
      </div>
    </div>
  );
}

export default EditRentForm;
