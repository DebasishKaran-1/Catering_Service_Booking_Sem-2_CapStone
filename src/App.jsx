import React from "react";
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import HeroSection from './Component/HeroSection.jsx'
import HowItWorks from './Component/HowItWorks.jsx'
import Navbar from './Component/Navbar.jsx'
import Cusines from './Component/PopularCuisines.jsx'
import Testimonials from './Component/Testimonials.jsx'
import Footer from './Component/Footer.jsx'

// Placeholder for Find Caterer page
const FindCaterer = lazy(() => import('./Component/FindCaterer.jsx'));
const Menu = lazy(() => import('./Component/Menu.jsx'));
const Contact = lazy(() => import('./Component/Contact.jsx'));
const MenuItemDetails = lazy(() => import('./Component/MenuItemDetails.jsx'));
const OrderNow = lazy(() => import('./Component/OrderNow.jsx'));

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection/>
            <HowItWorks/>
            <Cusines/>
            <Testimonials/>
            <Footer/>
          </>
        } />
        <Route path="/find-caterer" element={<React.Suspense fallback={<div>Loading...</div>}><FindCaterer /></React.Suspense>} />
        <Route path="/menu" element={<React.Suspense fallback={<div>Loading...</div>}><Menu /></React.Suspense>} />
        <Route path="/contact" element={<React.Suspense fallback={<div>Loading...</div>}><Contact /></React.Suspense>} />
        <Route path="/menu/:itemId" element={<React.Suspense fallback={<div>Loading...</div>}><MenuItemDetails /></React.Suspense>} />
        <Route path="/order-now" element={<React.Suspense fallback={<div>Loading...</div>}><OrderNow /></React.Suspense>} />
      </Routes>
    </>
  )
}

export default App
