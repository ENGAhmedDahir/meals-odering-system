import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css';

const Header = () => {
  return (
    <div className='header'>
        <div className="logo"><h1 className='logo-text'>Food Order </h1></div>
        <div className="menu">
            <div className="menu-items">
                <Link to= '/'>Home</Link>
                {/* <Link to= '/about' >About</Link> */}
                <Link to='/food'>food</Link>
                <Link to ='/drink'>drink</Link>
                <Link to= '/orders'>orders</Link>
            </div>
        </div>
        <Link to='/' className='btn'>Order
        </Link>
    </div>
  )
}

export default Header