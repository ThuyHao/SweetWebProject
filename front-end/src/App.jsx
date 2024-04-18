import { useState, useEffect } from 'react'
import HomeComponent from './components/HomeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import ListProductComponent from './components/ListProductComponent'
function App() {

  return (
    <>
      <HeaderComponent />
      <ListProductComponent />
      <FooterComponent />
    </>
  )
}

export default App
