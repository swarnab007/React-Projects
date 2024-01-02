import React from 'react';
import Header from './componenrts/Header/Header.jsx';
import Footer from './componenrts/Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />
      // Here using outlet we can perform nesting in routes
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
