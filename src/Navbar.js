import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link className='new-blog-link' to="/create">New blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;