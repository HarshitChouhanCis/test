import React from 'react'
import './Header.css';

function Header() {
      return (
        <header className="header">
          <div className="header-left">
            <a href="#" className="logo">Flipkart</a>
            <span className="explore">Explore <span className="plus">Plus</span></span>
          </div>
          <div className="header-middle">
            <input type="text" className="search-bar" placeholder="Search for Products, Brands and More" />
          </div>
          <div className="header-right">
            <a href="#" className="login">Login</a>
            <a href="#" className="cart">Cart</a>
            <a href="#" className="become-seller">Become a Seller</a>
          </div>
        </header>
      );
    }
    


export default Header