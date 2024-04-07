import { useState, useEffect } from 'react'
import './App.css'
import HomeComponent from './components/HomeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import './script/jquery.js';
import './script/index.js';
import './script/main.js';
function App() {

  useEffect(() => {
    const lazyLoadImage = () => {
      const ll = new LazyLoad({
        elements_selector: ".lazyload",
        load_delay: 100,
        threshold: 0
      });
    };

    lazyLoadImage();

    return () => {
      if (typeof window !== 'undefined') {
        window.awe_lazyloadImage = null;
      }
    };
  }, []);
  return (
    <>
      <HeaderComponent />
      <HomeComponent />
      <FooterComponent />
    </>
  )
}

export default App
