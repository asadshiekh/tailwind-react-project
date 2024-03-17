// PrivateRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useTheme } from './ThemeContent'; // Import your authentication context

const PrivateRoute = ({ element,fallbackpath = '/login' }) => {
  const { isLoggedIn } = useTheme(); // Get the authentication state from context

  // If user is logged in, render the element, otherwise redirect to login page
  //return isLoggedIn === 1 ? <Route {...rest} element={element} /> : <Navigate to="/login" />;
//  alert(isLoggedIn);
  return isLoggedIn === 1 ? (
    element
  ):(
    <Navigate to={fallbackpath} />
  );

};

export default PrivateRoute;
