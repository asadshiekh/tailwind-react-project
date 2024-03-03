import React from 'react'
import Banner from '../../assets/banner.jpg';
import BannerCard from './bannerCard';

function banner() {
  //  alert(card_data);
  // alert(card_data);
  return (
    <>
        <section className='banner relative rounded  bg-cover bg-center h-screen flex items-center justify-center lg:mb-[120px]' style={{ backgroundImage: `url(${Banner})`}}>
        <BannerCard/>     
        </section>
   
    </>
  )
}

export default banner