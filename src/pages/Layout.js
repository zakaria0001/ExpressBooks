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
  const footerStyle={
    position:'relative',
    bottom:'1',
    textAlign:'center',
   
  }
  


  return (
    
    <>
    
    <section className={`App ${theme}`}>
    <nav>
      <li><Link style={linkStyle} to="/">ExpressBooks</Link></li>
      <li><Link style={linkStyle} to="/Books">Livres</Link></li>
      <li><Link style={linkStyle} to="/About">A Propos De Nous</Link></li>
      <li><Link style={linkStyle} to="/Contact">Contact</Link></li>

    <li>
      <input type="checkbox" onChange={toggleTheme} id="toggle_checkbox"/>

        <label class="NVB" for="toggle_checkbox">
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
      <section  style={footerStyle}>ExpressBooks - 2023</section>
    </>
  )
};

export default Layout;