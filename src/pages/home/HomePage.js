import React from 'react'
import Banner from '../../components/bannerComponents';
import Ads from '../../components/adsComponents';
import Post from '../../components/PostsComponents';

function HomePage() {

  return (
    <div>
        <Banner/>
          <Ads/>
          <Post/>
          <Ads/>   
    </div>
  )
}

export default HomePage