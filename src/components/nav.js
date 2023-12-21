import Sidebar from "./sideList"
import { Link } from 'react-router-dom';


const Nav=()=>{
    return(
        <div className="navbar">
            <a href="#">Blogs App</a>
            <button> <Link to="/home">Home</Link></button>
            <button> <Link to="/addBlog">Add Blog</Link></button>
            

        </div>
       

    )
}

export default Nav