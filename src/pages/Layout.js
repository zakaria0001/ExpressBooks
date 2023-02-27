import { Outlet, Link } from "react-router-dom";
import '../assets/style/navbar.css';
import Logo from '../assets/logo/smalllogo.png';
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
  const imgStyle={
    width:'40px' , 
    height:'fit-content'
  }


  return (
    
    <>
    
    <section className={`App ${theme}`}>
    <nav>
      <li><Link style={linkStyle} to="/"><img style={imgStyle} src={Logo}/></Link></li>
      <li><Link style={linkStyle} to="/Books">Livres</Link></li>
      <li><Link style={linkStyle} to="/About">A Propos De Nous</Link></li>
      <li><Link style={linkStyle} to="/Contact">Contact</Link></li>

    <li classame="floatRights">
      <label class="switch">
        <input type="checkbox" onChange={toggleTheme}/>
        <span class="slider"></span>
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