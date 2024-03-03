import React, {useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import axios from 'axios';
// import { useTheme } from '../../ThemeContent';

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("")
  // const { isLoggedIn, login } = useTheme();


  const handleSubmit = async (e) => {
    // console.log('Defualt State:', isLoggedIn);
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const response = await axios.post('https://server-xp83.onrender.com/create-user', {
        name,
        phone,
        email,
        password
      });
      console.log('Response:', response.data);
      setSuccessMessage(response.data.msg);
      // login()
      // console.log('isUserLoggedIn after setIsUserLoggedIn:', isLoggedIn);
      // Optionally, you can reset the form after successful submission
      setName("");
      setPhone("");
      setEmail("");
      setPassword("");

    } catch (error) {
      console.error('Error:', error);
      setError(true);
      // setIsUserLoggedIn(false);
    } finally {
      setLoading(false);
    }
  };

  return (
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
                Create and account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Your Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    name="number"
                    id="number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="(+92) 334-997474-3"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
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
              

                <button
                  type="submit"
                  className="w-full text-black border-2 py-2 border-[#000]-500/50"
                >
                  Create an account
                </button>
                <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                
                {/* {isLoggedIn ? 'Already have an account?{" "}' : ''} */}
                
                  <a
                    href="/"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </a>
                </p>
                  {loading && <p className='font-medium text-center'>Loading...</p>}
                  {error && <p className='font-medium text-center text-[#d74646]'>Error occurred.</p>}
                  {successMessage && <p className='font-medium text-center text-[#47cb80]'>{successMessage}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact