import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import Login from './pages/Login.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import AppLayout from './ui/AppLayout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Products from './pages/Products.jsx';

import Users from './pages/Users.jsx';
import ProductForm from './features/products/ProductForm.jsx';
import EditProductForm from './features/products/EditProductForm.jsx';
import ProductCategoriesContainer from './features/categories/ProductCategoriesContainer.jsx';
import ProductsContainer from './features/products/ProductsContainer.jsx';
import Modal from './ui/Modal.jsx';

import PaymentType from './pages/PaymentType.jsx';
import Payment from './pages/Payment.jsx';
import Rents from './pages/Rents.jsx';
import RentsContainer from './features/rents/RentsContainer.jsx';
import RentDetail from './features/rents/RentDetail.jsx';
import RentFormContainer from './features/rents/RentFormContainer.jsx';
import Customers from './pages/Customers.jsx';
import AddRent from './pages/AddRent.jsx';
import ProtectedRoute from './ui/ProtectedRoute.jsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <SkeletonTheme baseColor="#e7e7e7" highlightColor="#ffffff">
        <BrowserRouter>
          <Modal>
            <Routes>
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/rents" element={<Rents />}>
                  <Route index element={<RentsContainer />} />
                  <Route
                    path="rent-form/:rentID"
                    element={<RentFormContainer />}
                  />
                  <Route path="add-rent" element={<AddRent />} />
                </Route>
                <Route path="/rents/:rentID" element={<RentDetail />} />

                <Route path="/cars" element={<Products />}>
                  <Route index element={<ProductsContainer />} />
                  <Route
                    path="categories"
                    element={<ProductCategoriesContainer />}
                  />
                </Route>
                <Route path="/cars/car-form" element={<ProductForm />} />
                <Route path="/cars/:carID" element={<EditProductForm />} />
                <Route path="/payments" element={<PaymentType />} />
                <Route path="/payments/:paymentTypeID" element={<Payment />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/users" element={<Users />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>

            <Modal.Window>
              <Modal.Body>
                <Modal.Title />
                <Modal.Content />
                <Modal.Buttons />
              </Modal.Body>
            </Modal.Window>
          </Modal>
        </BrowserRouter>
      </SkeletonTheme>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: '',
          duration: 5000,
          style: {
            background: '#ffffff',
            color: '#000000',
          },

          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
