import React from 'react'
import "./nav.css";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='navbar'>
        
        
        
        <Link to="/home"><li>HOME</li></Link>
        <Link to="/product"><li>PRODUCTS</li></Link>
        <Link to="/addtocart"><li>CART</li></Link>
    </div>
  )
}

export default Navbar