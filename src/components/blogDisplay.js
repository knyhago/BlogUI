import React from 'react';
import { useNavigate } from 'react-router-dom';
import Update from './update';

const Blogdisplay = (props) => {
    const navigate = useNavigate();

    const Delee = (e) => {
        var id = e.target.value;
        fetch(`https://blogapis-h3ny.onrender.com/deleteblog/` + id, { method: 'DELETE' })
            .then(() => {
                alert("Deleted");
                window.location.reload(); // Refresh the page after deletion
            })
            .catch(err => console.error(err));
    };

    const openUpdate = (e) => {
        var x = document.getElementById('updateOpen');
        x.style.display = "block";
    };

    const Display = ({ blogdata }) => {
        if (blogdata) {
            return blogdata.map((x) => {
                return (
                    <div className='column' key={x._id}>
                        <Update heading={x.heading} desc={x.desc} id={x._id} />
                        <div className='card' id={x._id}>
                            <div className='card-header'>
                                {x.heading}
                            </div>
                            <div className='card-body'>
                                {x.desc}
                            </div>
                            <div className='card-footer'>
                                <button className='btn btn-danger' value={x._id} onClick={Delee}>Delete</button>
                                <button className='btn btn-warning' value={x._id} onClick={openUpdate} disabled>Update</button>
                            </div>
                        </div>
                    </div>
                )
            });
        }
    };

    return (
        <div className='row'>
            <div style={{ display: 'block' }}>
                <Display blogdata={props.blogdata} />
            </div>
        </div>
    );
};

export default Blogdisplay;
