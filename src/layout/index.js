import React from 'react';
import Header from './header';
import Footer from './footer';

function index({ children }) {
  return (  
    <>
    <Header />
    {children}
    <Footer />
    </>
   )
}

export default index