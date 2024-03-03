import React from 'react';
import Header from './header';
import Footer,{ Footer1 } from './footer';


function index({ children }) {
  return (  
    <>
    <Header />
    {children}
    <Footer />
    <Footer1/>
    </>
   )
}

export default index