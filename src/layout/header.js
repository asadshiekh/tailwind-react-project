import React from 'react';
import Logo from '../assets/Logo.png';
import LogoWhite from '../assets/Logo-white.png';
import {useTheme} from '../ThemeContent';
import { Link } from 'react-router-dom';
import SideMenu from '../components/siteMenuComponent/siteMenu';
import { useState } from 'react';
function Header() {
  const { isDarkMode,toggleDarkMode,isLoggedIn,logout} = useTheme();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false); // State to track side menu visibility

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen); // Toggle side menu visibility
  };

  // alert(isLoggedIn);

  
  return (
    <>
   <section className={`${isDarkMode ? 'bg-black' : 'bg-white'} navbar md:flex justify-between items-center py-5 hidden`}>
   
        <div className="logo">
        {isDarkMode ? (
          <img src={LogoWhite} alt="logo" />
          ) : (
          <img src={Logo} alt="logo" />
          )}
        </div>
        <div className="nav-links">
          <ul className={`${isDarkMode ? 'text-white' : 'text-black'} flex list-none`}>
            <li className="mr-3"><Link to="/">Home</Link></li>
            {/* <li className="mr-3"><Link to="/">Blog</Link></li>
            <li className="mr-3"><Link to="/">Posts</Link></li>
            <li className="mr-3"><Link to="/">Pages</Link></li> */}
            {isLoggedIn ? (
              <>
                <li className="mr-3"><Link to="/create-blog">Add Blog</Link></li>
                <li className="mr-3"><Link to="/your-blog">Your Blog</Link></li>
                <button onClick={logout}>Logout</button>
              </>
            ) : (
              <>
                <li className="mr-3"><Link to="/register">Register</Link></li>
                <li className="mr-3"><Link to="/login">Login</Link></li>
              </>
            )}

          </ul>
        </div>
        <div className="search flex items-center">
          <div className="search-bar relative mr-5">
            <input className="w-40 bg-gray-100 border pl-1 rounded-md py-2 focus:outline-none focus:ring focus:border-blue-300" placeholder='Search....'></input>
            <div className="absolute inset-y-0 right-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 bg-gray-100"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-5.2-5.2" />
                    <circle cx="10" cy="10" r="8" />
                  </svg>
            </div>
          </div>
          <div className='toggle'>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" onChange={toggleDarkMode} className="sr-only peer"></input>
              <div className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer ${isDarkMode ? 'dark:bg-gray-700' : ''} peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${isDarkMode ? 'dark:border-gray-600 peer-checked:bg-blue-600' : ''}`}></div>
            </label>
          </div>
        </div>
      </section>

      <section className='navbar flex justify-between items-center py-5 md:hidden'>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      
        <div className='menu flex flex-row'>
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="h-5 w-5 mr-2" // Add margin-right for spacing
    onClick={toggleSideMenu} 
    >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16m-7 6h7"
    ></path>
  </svg>
  <svg
    className="h-5 w-5 bg-gray-100"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-5.2-5.2" />
    <circle cx="10" cy="10" r="8" />
  </svg>
</div>
      </section>

      <section className={`${isSideMenuOpen ? 'block' : 'hidden'} md:hidden`}> {/* Conditionally render the SideMenu component */}
        <SideMenu />
      </section>

    </>
  );
}

export default Header;
