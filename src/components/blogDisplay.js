import React, { useState } from 'react';  // Import useState hook
import { useNavigate } from 'react-router-dom';
import Update from './update';


const Blogdisplay = (props) => {
    const [showUpdate, setShowUpdate] = useState(false); // State to control update visibility
    const [currentBlog, setCurrentBlog] = useState(null); // State to store the current blog data for update
    const navigate = useNavigate();

    const Delee = (e) => {
        const id = e.target.value;
        fetch(`https://blogapis-h3ny.onrender.com/deleteblog/${id}`, { method: 'DELETE' })
            .then(() => {
                alert("Deleted");
                window.location.reload(); // Refresh the page after deletion
            })
            .catch(err => console.error(err));
    };

    const openUpdate = (blog) => {
        setCurrentBlog(blog);  // Set the current blog data to update
        setShowUpdate(true);   // Show the update form
    };

    const Display = ({ blogdata }) => {
        if (blogdata) {
            return blogdata.map((x) => {
                return (
                    <div className='column' key={x._id}>
                        <div className='card' id={x._id}>
                            <div className='card-header'>
                                {x.heading}
                            </div>
                            <div className='card-body'>
                                {x.desc}
                            </div>
                            <div className='card-footer'>
                                <button className='btn btn-danger' value={x._id} onClick={Delee}>Delete</button>
                                <button className='btn btn-warning' onClick={() => openUpdate(x)}>Update</button>
                            </div>
                        </div>
                    </div>
                );
            });
        }
    };

    return (
        <div className='row'>
            <div style={{ display: 'block' }}>
                <Display blogdata={props.blogdata} />
            </div>
            {showUpdate && currentBlog && (
                <Update
                    id={currentBlog._id}
                    heading={currentBlog.heading}
                    desc={currentBlog.desc}
                />
            )}
        </div>
    );
};

export default Blogdisplay;
