import React from 'react'
import Logo from '../assets/Logo.png';


function footer() {
  return (
    <>
      <section className='footer_section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-100 pt-[50px] pb-[50px] lg:mt-[50px]'>
        <div className='section_1'>
          <span className='font-bold mb-3 block text-center md:text-left'>About</span>
          <p className='text-gray-400 mb-5 sm:text-small text-center md:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        <div className='footer_email'>
          <p className='font-bold sm:block text-center md:text-left'>Email: <span className=' text-gray-600 font-normal'> info@jstemplate.net</span></p>
          <p className='font-bold text-center md:text-left'>Phone : <span className='text-gray-600 font-normal'> 880 123 456 789</span></p>
        </div>
        </div>
        <div className='section_2 text-center md:text-left block md:flex justify-center mt-5 md:mt-0'>
          <div className='listing'>
              <h2 className='font-bold mt-5 mb-5 md:mb4 md:mt-0 md:mr-[80px]'>Quick Link</h2>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Archived</li>
                <li>Author</li>
                <li>Contact</li>
              </ul>
          </div>
          <div className='listing mb-4 md:mb-0'>
            <h2 className='font-bold mt-5 mb-5 md:mb4 md:mt-0'>Category</h2>
            <ul>
                <li>LifeStyle</li>
                <li>Technology</li>
                <li>Travel</li>
                <li>Business</li>
                <li>Economy</li>
                <li>Support</li>
              </ul>
          </div>
        </div>
        <div className='section_3 text-center bg-white p-5'>
          <div className='Newletter'>
            <h2 className='font-bold'>Weekly Newsletter</h2>
            <p>Get blog articles and offers via email</p>
            <input className='border py-2 mt-3 flex' style={{width:'100%'}} placeholder='Your Email' type='text'></input>
            <button className='bg-blue-500 text-white p-2 mt-5' style={{width:'100%'}}>Subscribe</button>
          </div>
        </div>
      </section>
      <hr></hr>
      <section className='bottom_footer block md:flex justify-between bg-gray-100 py-4'>
        <div className='footer_img_logo flex justify-center md:justify-start'>
        <img src={Logo} alt="logo" />
        </div>
        <div className='footer_img_logo mt-5 md:mt-0'>
          <ul className='flex justify-center md:justify-start'>
            <li className='mr-5'>Terms of Use</li>
            <li className='mr-5'>Privacy Policy</li>
            <li className='mr-5'>Cookies Policy</li>
          </ul>  
        </div>
      </section>
    </>
  )
}

export default footer