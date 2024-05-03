import HomeComponent from './components/HomeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import ListProductComponent from './components/ListProductComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductComponent from './components/ProductComponent'
function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/products" element={<ListProductComponent />} />
          <Route path="/products/:id" element={<ProductComponent/>} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
