import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Login from './pages/Login.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import AppLayout from './ui/AppLayout.jsx';
import Modal from './ui/Modal.jsx';
import ProtectedRoute from './ui/ProtectedRoute.jsx';

const Dashboard = lazy(() => import('./pages/Dashboard.jsx'));
const Rents = lazy(() => import('./pages/Rents.jsx'));
const RentsContainer = lazy(
  () => import('./features/rents/RentsContainer.jsx'),
);
const RentFormContainer = lazy(
  () => import('./features/rents/RentFormContainer.jsx'),
);
const AddRent = lazy(() => import('./pages/AddRent.jsx'));
const RentDetail = lazy(() => import('./features/rents/RentDetail.jsx'));
const Products = lazy(() => import('./pages/Products.jsx'));
const ProductsContainer = lazy(
  () => import('./features/products/ProductsContainer.jsx'),
);
const ProductCategoriesContainer = lazy(
  () => import('./features/categories/ProductCategoriesContainer.jsx'),
);
const ProductForm = lazy(() => import('./features/products/ProductForm.jsx'));
const EditProductForm = lazy(
  () => import('./features/products/EditProductForm.jsx'),
);
const PaymentType = lazy(() => import('./pages/PaymentType.jsx'));
const Payment = lazy(() => import('./pages/Payment.jsx'));
const Customers = lazy(() => import('./pages/Customers.jsx'));
const Users = lazy(() => import('./pages/Users.jsx'));
const Account = lazy(() => import('./pages/Account.jsx'));

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
                  <Route
                    path="/payments/:paymentTypeID"
                    element={<Payment />}
                  />
                  <Route path="/customers" element={<Customers />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/account" element={<Account />} />
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
