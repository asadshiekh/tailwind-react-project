import React from 'react';
import Logo from '../assets/Logo.png';

function Header() {


  return (
    <>
      <section className="navbar md:flex justify-between items-center py-5 hidden">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="nav-links">
          <ul className="flex list-none">
            <li className="mr-5">Home</li>
            <li className="mr-5">Blog</li>
            <li className="mr-5">Single Post</li>
            <li className="mr-5">Pages</li>
            <li>Contact</li>
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
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-5.2-5.2" />
                <circle cx="10" cy="10" r="8" />
              </svg>
            </div>
          </div>
          <div className='toggle'>
            <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer"></input>
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
          </div>
        </div>
      </section>

      <section className='navbar flex justify-between items-center py-5 md:hidden'>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className='menu'>
        <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H20M4 12H20M4 18H20" stroke="#4A5568" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
      </section>

    </>
  );
}

export default Header;
