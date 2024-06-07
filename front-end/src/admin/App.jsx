import React from 'react';
import './assets/css/main.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import AdminFooter from './layout/AdminFooter.jsx';
import AdminHeader from './layout/AdminHeader.jsx';
import AdminHomePage from './pages/AdminHomePage.jsx';
import AdminAccountComponent from './components/AdminAccountComponent.jsx';
import LoginPage from './pages/LoginPage.jsx';
import AdminProductComponent from './components/AdminProductComponent.jsx';
import AdminOrderComponent from './components/AdminOrderComponent.jsx';
import AdminReportComponent from './components/AdminReportComponent.jsx';
import AdminAddProductComponent from './components/AdminAddProductComponent.jsx';
import AdminRoleComponent from './components/AdminRoleComponent.jsx';
import AdminDiscountComponent from './components/AdminDiscountComponent.jsx';
import AdminUpdateProductComponent from './components/AdminUpdateProductComponent.jsx';

function AppContent() {
  const location = useLocation();
  const noHeaderFooterPaths = ['/admin', '/admin/', '/admin/login'];
  const showHeaderFooter = !noHeaderFooterPaths.includes(location.pathname);

  return (
    <>
      {showHeaderFooter && <AdminHeader />}
      <Routes>
        <Route path="/admin" element={<LoginPage />} />
        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="/admin/index" element={<AdminHomePage />} />
        <Route path="/admin/account-manager" element={<AdminAccountComponent />} />
        <Route path="/admin/account-role-manager" element={<AdminRoleComponent />} />
        <Route path="/admin/product-manager" element={<AdminProductComponent />} />
        <Route path="/admin/add-product" element={<AdminAddProductComponent />} />
        <Route path="/admin/edit-product/:id" element={<AdminUpdateProductComponent />} />
        <Route path="/admin/order-manager" element={<AdminOrderComponent />} />
        <Route path="/admin/discount-manager" element={<AdminDiscountComponent />} />
        <Route path="/admin/report" element={<AdminReportComponent />} />
      </Routes>
      {showHeaderFooter && <AdminFooter />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
