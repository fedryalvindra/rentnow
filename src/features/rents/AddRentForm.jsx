import { useState } from 'react';
import EmptyRent from '../../ui/EmptyRent.jsx';
import Search from '../../ui/Search.jsx';
import { useCustomers } from '../customers/useCustomers.js';
import RentCustomerInformation from './RentCustomerInformation.jsx';
import { useProducts } from '../products/useProducts.js';
import AddRentDetailForm from './AddRentDetailForm.jsx';
import { useGetAllPayments } from '../payment/useGetAllPayments.js';
import GetCustomerLoading from '../../ui/GetCustomerLoading.jsx';
import RentFormLoading from '../../ui/RentFormLoading.jsx';

function AddRentForm() {
  const {
    data: customer,
    isPending: isLoadingCustomers,
    mutate: getCustomer,
  } = useCustomers();
  const [email, setEmail] = useState('');
  const { data: cars, isLoading: isLoadingCars } = useProducts();
  const { data: payments, isLoading: isLoadingAllPayment } =
    useGetAllPayments();

  const handleSearch = (e) => {
    e.preventDefault();
    getCustomer(email);
  };

  return (
    <div>
      <div className="space-y-3">
        <form className="flex gap-3" onSubmit={handleSearch}>
          <Search
            value={email}
            onChange={setEmail}
            placeholder="Customer email"
          />
        </form>
        {isLoadingCustomers ? (
          <GetCustomerLoading />
        ) : customer ? (
          <RentCustomerInformation customer={customer} />
        ) : (
          <EmptyRent />
        )}

        {isLoadingCars || isLoadingAllPayment ? (
          <RentFormLoading />
        ) : (
          <AddRentDetailForm
            customer={customer}
            cars={cars}
            payments={payments}
          />
        )}
      </div>
    </div>
  );
}

export default AddRentForm;
