import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Login from './pages/Login.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import AppLayout from './ui/AppLayout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Transactions from './pages/Transactions.jsx';
import Products from './pages/Products.jsx';
import Shipments from './pages/Shipments.jsx';
import Payments from './pages/Payments.jsx';
import Users from './pages/Users.jsx';
import ProductForm from './features/products/ProductForm.jsx';
import { Toaster } from 'react-hot-toast';
import EditProductForm from './features/products/EditProductForm.jsx';
import ProductCategoriesContainer from './features/categories/ProductCategoriesContainer.jsx';
import ProductsContainer from './features/products/ProductsContainer.jsx';

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
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/products" element={<Products />}>
              <Route index element={<ProductsContainer />} />
              <Route
                path="categories"
                element={<ProductCategoriesContainer />}
              />
              <Route path="product-form" element={<ProductForm />} />
            </Route>
            <Route path="/products/:productID" element={<EditProductForm />} />
            <Route path="/shipments" element={<Shipments />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/users" element={<Users />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
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
