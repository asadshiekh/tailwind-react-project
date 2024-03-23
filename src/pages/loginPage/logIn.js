import React, {useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import axios from 'axios';
import { useTheme } from '../../ThemeContent';


function LogIn() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);
const [error_message, setErrorMessage] = useState("");
 const {isLoggedIn,login } = useTheme();
 const navigate = useNavigate();

const handleSubmit = async (e) => {
  console.log(process.env.REACT_APP_API_URL);  
  console.log(isLoggedIn);  
     e.preventDefault();
     setLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
          email,
          password
        });

        // get full data
        //console.log(response);
        // alert(response.data.data.full_name);
        if(response.data.Loginstatus === 1){
            login();
            const fullName = response.data.data.full_name;
            const UserEmail = response.data.data.email;
            const UserId = response.data.data._id;
            // Set the value in localStorage
            localStorage.setItem('fullName', fullName);
            localStorage.setItem('Email', UserEmail);
            localStorage.setItem('UserID', UserId);
            navigate('/');
        }

      
    } catch (error) {
        setError(true);
        setErrorMessage(error.response.data.error || "An error occurred");
        // console.error('Error:', error);

    } finally {
        setEmail("");
        setPassword("");
        setLoading(false);
        console.log(isLoggedIn);  
    }  
};

  return (
    <div>
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto my-5 lg:py-0">
          <Link to="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="mr-2"
              src={Logo}
              alt="logo"
            />
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login Here
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
         
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              
                <button type="submit" className="w-full text-black border-2 py-2 border-[#000]-500/50">
                    Login Here
                </button>
                <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                
                  <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >Did not have an Account</Link>
                </p>
                  {loading && <p className='font-medium text-center'>Loading...</p>}
                  {error && <p className='font-medium text-center text-[#d74646]'>{error_message}</p>}
                
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default LogIn
