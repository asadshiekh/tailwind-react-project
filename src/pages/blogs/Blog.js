import React from 'react'
import Banner from '../../components/bannerComponents';
import Post from '../../components/PostsComponents';
import Ads from '../../components/adsComponents';
import Heading from '../../components/headingComponents/Heading';
function Blog() {

  return (
    <>
      <Heading/>
      <Banner/>
      <Ads/>
      <Post/>
      <Ads/>
    </>
  )
}

export default Blog