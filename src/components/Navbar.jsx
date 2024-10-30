import logo from '../assets/images/logo.avif'
import { Link, NavLink, useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate()
    return (
        
            <div className='navbar'>
            <div className='image'>
            <img src={logo} alt="" />
            <p>Router</p>
            </div>
            
            <ul>
              <NavLink to= '/'><li>Home</li></NavLink> 
              <NavLink to = '/products'><li>Products</li></NavLink>  
              <NavLink to = '/about'><li>About</li></NavLink>  
              <NavLink to = '/jobs' ><li>Jobs</li></NavLink>
               <NavLink to = '/contact'><li>Contact</li></NavLink> 
              
            </ul>
            {/* <button onClick={() => navigate(`/about`)}>Get Started</button> */}
            <button onClick={() => navigate('/contact', {replace: true})}>Get Started</button>
            
        </div>
        
    );
};

export default Navbar;