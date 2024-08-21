import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Login from './pages/Login.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import AppLayout from './ui/AppLayout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Transactions from './pages/Transactions.jsx';
import Products from './pages/Products.jsx';
import Shipments from './pages/Shipments.jsx';
import Payments from './pages/Payments.jsx';
import Users from './pages/Users.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/products" element={<Products />} />
          <Route path="/shipments" element={<Shipments />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/users" element={<Users />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
