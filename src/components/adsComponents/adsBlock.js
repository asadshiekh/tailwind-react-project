import React from 'react'

function adsBlock() {
  return (
    <>
        <section className='ads-section w-full sm:w-1/2 md:ml-auto md:mr-auto text-center bg-gray-200 rounded p-2'>
          <span className='text-gray-400 text-[12px] font-medium'>Advertisment</span>
          <p className='text-gray-400 text-[16px] font-bold'>You can place ads</p>
          <span className='text-gray-500 text-[12px] font-thin'>750x100</span>
        </section>
    </>
  )
}

export default adsBlock