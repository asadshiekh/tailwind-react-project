import React from 'react';
import AuthorImage from '../../assets/author.png';

function PostCard({title,description,date,author,comments,post_img}) {

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  console.log(formattedDate)

  return (
  
    <div className='post_card p-2 bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md'>
      <div className='post_img'>
      <img src={post_img} alt='author' style={{width:'100%'}}/>
      </div>
      <div className='post_card_content p-4'>
        <label className='bg-blue-500 text-sm rounded p-1 inline-block mb-2 text-white'>{title}..</label>
        <p className='text-2xl font-medium mb-4'>{description.slice(0, 30)}...</p>
        <div className='author_banner flex items-center'>
          <div className='author_img'>
            <img src={AuthorImage} alt='author' className='rounded-full w-8 h-8 object-cover' />
          </div>
          <div className='ml-2'>
            <span className='text-gray-400 text-sm'>{author}</span>
            <span className='text-gray-400 text-sm ml-3'>{formattedDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
