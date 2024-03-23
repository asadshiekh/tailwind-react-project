import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

// import { useTheme } from '../../ThemeContent';
function UserBlog() {

     const [getBlogs, setUserBlog] = useState([]);
     const [error, setError] = useState(null);
    // const {blogsContext} = useTheme();
    const [postIdToDelete, setPostIdToDelete] = useState(null);

    const [postId, setPostId] = useState(null);
    const [editPostTitle, setEditPostTitle] = useState(' ');
    const [editPostDescription, setEditPostDescription] = useState(' ');

useEffect(() => {
  const fetchData = async () => { // Define an async function
    try {
      const userid = localStorage.getItem('UserID');
      // Simulate loading delay with setTimeout
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/fetch-user-only/${userid}`);
      console.log(response);
      setUserBlog(response.data);
    } catch (error) {
      setError(error.response.data.error || "An error occurred");
      console.error('Error fetching data: ', error);
    }
  };

  fetchData(); // Call the async function

}, []); // Empty dependency array to run only once on component mount

  // Function to set the post ID to delete and open the modal
  const handleDeleteConfirmation = (postId) => {
    setPostIdToDelete(postId);
    document.getElementById('my_modal_1').showModal();
  };

  const handleEditConfirmation = (postId,title,description) =>{

    console.log("Post id:",postId);
    console.log("title:",title);
    console.log("description:",description);

    setPostId(postId);
    setEditPostTitle(title);
    setEditPostDescription(description);
    document.getElementById('my_modal_2').showModal();

  }

  const deletePost = async () => {
    try {
      console.log(postIdToDelete);
      if (postIdToDelete) {
        // Make DELETE request to your API endpoint to delete the post
        await axios.delete(`${process.env.REACT_APP_API_URL}/delete-post/${postIdToDelete}`);
        // Remove the deleted post from the state
        setUserBlog(prevState => prevState.filter(post => post._id !== postIdToDelete));
        // Close the modal after deletion
        document.getElementById('my_modal_1').close();
      }
    } catch (error) {
      console.error('Error deleting post: ', error);
    }
  };

  const editPostSubmit = async ()=>{
    try {
      // console.log(postIdToDelete);
      if (postId != null) {
        // Make DELETE request to your API endpoint to delete the post
      
        await axios.put(`${process.env.REACT_APP_API_URL}/update-blog/${postId}`, {
          editPostTitle,
          editPostDescription,
          postId,
        });

        const updatedBlogs = getBlogs.map(blog => {
          if (blog._id === postId) {
            return { ...blog, title: editPostTitle, description: editPostDescription };
          }
          return blog;
        });
        setUserBlog(updatedBlogs);

        // Remove the deleted post from the state
        // setUserBlog(prevState => prevState.filter(post => post._id !== postIdToDelete));
        // Close the modal after deletion
        
        document.getElementById('my_modal_2').close();
      }
    } catch (error) {
      console.error('unable to update post: ', error);
    }

  }

return (
    <div>

      <div className="navbar flex justify-center bg-base-100">
          <Link to='/' className="text-xl">MetaBlog</Link>
      </div>

        <div className="overflow-x-auto">

        {/* {loading ? (
        <div className="loading-container text-center">
          <span className="loading loading-ring loading-lg" style={{ width: '150px' }}></span>
        </div>
      ) : ( */}
        <table className="table">
          <thead>
            <tr>
              <th>Blog Name</th>
              <th>Blog Description</th>
              <th>Author</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {getBlogs.map(blog => (
              <tr key={blog._id}>
                <th>{blog.title}</th>
                <td>{blog.description.slice(0, 10)}</td>
                <td>{blog.user_id.full_name}</td>
                <td><input type="button" value="Edit" onClick={() => handleEditConfirmation(blog._id,blog.title,blog.description)}  class="btn" />    <input type="button" onClick={() => handleDeleteConfirmation(blog._id)} value="Delete" className="btn" />
            </td>
              </tr>
            ))}
          </tbody>
        </table>
      {/* )} */}

        </div>
       
        <footer className="footer p-10 bg-base-200 text-base-content">
        <nav>
            <h6 className="footer-title">Services</h6> 
            <a href='/' className="link link-hover">Branding</a>
            <a href='/' className="link link-hover">Design</a>
            <a href='/' className="link link-hover">Marketing</a>
            <a href='/' className="link link-hover">Advertisement</a>
        </nav> 
        <nav>
            <h6 className="footer-title">Company</h6> 
            <a href='/' className="link link-hover">About us</a>
            <a href='/' className="link link-hover">Contact</a>
            <a href='/' className="link link-hover">Jobs</a>
            <a href='/' className="link link-hover">Press kit</a>
        </nav> 
        <nav>
            <h6 className="footer-title">Legal</h6> 
            <a href='/' className="link link-hover">Terms of use</a>
            <a href='/' className="link link-hover">Privacy policy</a>
            <a href='/' className="link link-hover">Cookie policy</a>
        </nav>
        </footer> 
        <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <aside className="items-center grid-flow-col">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
            <p>ACME Industries Ltd. <br/>Providing reliable tech since 1992</p>
        </aside> 
        <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
            <a href='/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
            <a href='/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
            <a href='/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
            </div>
        </nav>
        </footer>


<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Confirmation</h3>
    <div className="modal-action">
      <form method="dialog">
          <div role="alert" className="alert">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Are you sure you want to delete this post?</span>
          <div>
            <button onClick={deletePost} className="btn btn-sm">Confirm</button>
            <button className="btn btn-sm">Close</button>
          </div>
        </div>
   
      </form>
    </div>
  </div>
</dialog>


<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Confirmation</h3>
    <div className="modal-action">
      <form method="dialog">
              
      <input type="text" placeholder="Enter Title" onChange={(e) => setEditPostTitle(e.target.value)}  value={editPostTitle} className="input input-bordered" />
      <input type="text" placeholder="Enter Description" onChange={(e) => setEditPostDescription(e.target.value)} value={editPostDescription} className="input input-bordered" />  
        
          <div className='text-right mt-5'>
            <button onClick={editPostSubmit} className="btn btn-sm">Confirm</button>
            <button className="btn btn-sm">Close</button>
          </div>
        
      </form>
    </div>
  </div>
</dialog>
</div>
  )
}

export default UserBlog
