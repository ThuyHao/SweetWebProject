import HomePage from './pages/HomePage.jsx'
import Header from './layout/Header.jsx'
import Footer from './layout/Footer.jsx'
import ListProductComponent from './pages/ProductsPage.jsx'
import ProductComponent from './pages/ProductDetailPage.jsx'
import LoginComponent from './pages/LoginPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartPage from './pages/CartPage.jsx'

import '../index.css'
import './assets/css/index.css'
import './assets/css/main.css'
import './assets/css/responsive.css'
import './assets/css/product-infor-style.css'
import './assets/css/quickviews-popup-cart.css'
import './assets/css/coupon.css'
import './assets/css/sidebar-style.css'
import './assets/css/product-style.css'
import './assets/css/cartpage.css'
import './assets/css/appcombo.css'
import './assets/css/collection-style.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/products" element={<ListProductComponent />} />
          <Route path="/products/:id" element={<ProductComponent/>} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
