import { Outlet, Link } from "react-router-dom";
import '../assets/style/navbar.css';

import React, { useState, useEffect } from 'react';


const Layout = () => {

  const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
      );
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
useEffect(() => {
  localStorage.setItem('theme', theme);
      document.body.className = theme;
    }, [theme]);
  
  const linkStyle = {
   
    textDecoration: "none",
    color: 'white'
  };
  return (
    
    <>
    
    <section className={`App ${theme}`}>
    
    <nav>
      <li>
        ExpressBooks
      </li>
      <li><Link style={linkStyle} to="/">Home</Link></li>
      <li><Link style={linkStyle} to="/Books">Books</Link></li>
      <li><Link style={linkStyle} to="/About">About</Link></li>
      <li><Link style={linkStyle} to="/Contact">Contact</Link></li>

    <li>
      <input type="checkbox" onChange={toggleTheme} id="toggle_checkbox"/>

        <label for="toggle_checkbox">
          <div id="star">
            <div class="star" id="star-1">★</div>
            <div class="star" id="star-2">★</div>
          </div>
          <div id="moon"></div>
        </label>      
     </li>
    </nav>
    </section>
      <Outlet />
      <section>
    ExpressBooks - 2023
   </section>
    </>
  )
};

export default Layout;