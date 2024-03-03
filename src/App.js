// import Layout from './layout';
// import LayoutTwo from './layout-style-two';
// import { ThemeProvider } from './ThemeContent'; 
// import {Routes,Route} from 'react-router-dom';
// import HomePage from './pages/home/Index';
// import Blog from './pages/blogs/Blog';
// import ContactUs from './pages/contact';
// import React, { useEffect } from 'react';

// function App() {

//   useEffect(() => {
//     // Set cookie with SameSite=None and Secure attributes
//     document.cookie = 'cookieName=cookieValue; SameSite=None; Secure';
//   }, []);

//   return (
//     <div>
//       <ThemeProvider>
//           <Layout>
//           <Routes>
//             <Route path='/' exact element={<HomePage/>}></Route>
//             <Route path='/blogs' exact element={<Blog/>}></Route>
//           </Routes>
//           </Layout>
//       </ThemeProvider>
//     </div>    
//   );
// }

// export default App;


import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout';
import LayoutTwo from './layout-style-two';
import { ThemeProvider} from './ThemeContent'; 
import HomePage from './pages/home/Index';
import Blog from './pages/blogs/Blog';
import ContactUs from './pages/contact';
import Login from './pages/loginPage';
function App() {
  useEffect(() => {
    // Set cookie with SameSite=None and Secure attributes
    document.cookie = 'cookieName=cookieValue; SameSite=None; Secure';
  }, []);
  // const { isLoggedIn } = useTheme();
  return (
    <ThemeProvider>
     
        <Routes>
          <Route path='/' element={<HomeLayout/>} />
          <Route path='/blogs' element={<BlogLayout/>} />
          <Route path='/contact' element={<ContactLayout/>} />
          <Route path='/login' element={<LoginLayout />} />
          {/* {isLoggedIn === 1 ? (
          <Navigate to="/" />
        ) : (
          <Route path='/login' element={<LoginLayout />} />
        )} */}
       
        </Routes>

    </ThemeProvider>
  );
}

function HomeLayout() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}

function BlogLayout() {
  return (
    <Layout>
      <Blog />
    </Layout>
  );
}

function ContactLayout() {
  return (
    <LayoutTwo>
      <ContactUs />
    </LayoutTwo>
  );
}

function LoginLayout(){
  return (
    <LayoutTwo>
      <Login />
    </LayoutTwo>
  )
}

export default App;

