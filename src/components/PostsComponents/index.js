import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';

import Image1 from '../../assets/image1.jpg';
// import Image2 from '../../assets/image2.jpg';
// import Image3 from '../../assets/image3.jpg';

// import Image4 from '../../assets/image4.jpg';
// import Image5 from '../../assets/image5.jpg';
// import Image6 from '../../assets/image6.jpg';

// import Image7 from '../../assets/image7.jpg';
// import Image8 from '../../assets/image8.jpg';
// import Image9 from '../../assets/image9.jpg';

function Index() {

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://server-xp83.onrender.com/get-blog/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setBlogs(data); // Update state with the fetched blogs
        setLoading(false); // Set loading state to false
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
        setLoading(false); // Set loading state to false even if there's an error
      });
  }, []); // Empty dependency array to run only once on component mount

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <>
    <section className='post_section mt-[50px] mb-[50px]'>
       <h2 className='text-2xl font-bold mb-4 text-center md:text-left'>Latest Post</h2>
       <div className='all_posting grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
 
       {blogs.map(blog => (
        <div key={blog._id}>
          <PostCard
            title={blog.title}
            description={blog.description}
            date={blog.date}
            author={blog.author}
            comments={blog.comments}
            post_img={Image1}
          />
        </div>
        ))}

          
           {/* <PostCard post_img={Image1}/> 
           <PostCard post_img={Image2}/> 
           <PostCard post_img={Image3}/>

           <PostCard post_img={Image4}/> 
           <PostCard post_img={Image5}/> 
           <PostCard post_img={Image6}/>

           <PostCard post_img={Image7}/> 
           <PostCard post_img={Image8}/> 
           <PostCard post_img={Image9}/> */}
       </div>
       <div className='load_more flex justify-center'>
       <button className='border text-gray-400 p-2 mt-5'>View All Post</button>
       </div>
    </section>

    </>
  )
}

export default Index