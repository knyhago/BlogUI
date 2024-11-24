import Sidebar from "./sideList"
import { Link } from 'react-router-dom';


const Nav=()=>{
    return(
        <div className="navbar">
            <a buttonutton className='btn btn-light' href="#">Blogs App</a>
            <button buttonutton className='btn btn-light' > <Link to="/home">Home</Link></button>
            <button button className='btn btn-light' > <Link to="/addBlog">Add Blog</Link></button>
            

        </div>
       

    )
}

export default Nav