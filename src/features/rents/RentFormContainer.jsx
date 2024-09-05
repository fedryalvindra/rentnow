import BackButton from '../../ui/BackButton.jsx';
import PagesLayout from '../../ui/PagesLayout.jsx';
import { usePayments } from '../payment/usePayments.js';
import { useProducts } from '../products/useProducts.js';
import EditRentForm from './EditRentForm.jsx';
import { useRent } from './useRent.js';

function RentFormContainer() {
  const { data: rent, isLoading: isLoadingRent } = useRent();
  const { data: cars, isLoading: isLoadingCars } = useProducts();

  if (isLoadingRent || isLoadingCars) return;
  return (
    <PagesLayout>
      <BackButton />
      <EditRentForm rent={rent} cars={cars}/>
    </PagesLayout>
  );
}

export default RentFormContainer;
