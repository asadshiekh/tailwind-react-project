import React from 'react'
import AuthorImage from '../../assets/author.png'
function bannerCard() {
  return (
    <>
      <section className='banner-card left-0 w-100 md:w-2/6  bottom-0 md:rounded md:shadow-lg bg-white md:-bottom-20 md:left-8 absolute' style={{padding:'20px'}}>
          <lable className='bg-blue-500 text-sm rounded p-1 inline-block mb-2 text-white'>Techonolgy</lable>
          <p className='sm:text-[16px] md:text-[25px] font-medium'>The Impact of Technology on the Workplace: How Technology is Changing</p>
          <div className='author_banner'>
            <div className='author_img flex items-center rounded-full w-100 h-8 mt-3 object-cover'>
              <img src={AuthorImage} alt='author'></img>
              <span className='text-gray-400 text-[12px] inline-block ml-2 mr-3'>Jason Francisco</span>
              <span className='text-gray-400 text-[12px]'>Augest 20, 2020</span>
            </div>
          </div>
      </section>
    </>
  )
}

export default bannerCard