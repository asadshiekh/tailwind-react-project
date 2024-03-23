import React from 'react'
import {useTheme} from '../../ThemeContent';
import { Link } from 'react-router-dom';
function SiteMenu() {

const {isLoggedIn,logout} = useTheme();
  return (
    <div>
        <ul className='text-center'>
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
  )
}

export default SiteMenu
