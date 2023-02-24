import { Outlet, Link } from "react-router-dom";
import '../assets/style/navbar.css';
import '../assets/style/footer.css';
import logo from '../assets/logo/smalllogo.png';
import '../assets/style/header.css'

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
  const refreshPage = () => {
          setTheme('light');
  }
  return (
    <>
    <section className={`App ${theme}`}>
    <header>
    <div class="header-main">
            <div class="logo">
              <a href="/">
              <img class= "logo" src={logo} alt="logo" />
              </a>


          <div class="search">
            <div class="search-box">
              <input type="text" className="searchbox" placeholder="Search for books, authors, genres, etc." />
              <button type="submit" class="search-btn">
                <i class="fa fa-search">🔍</i>
              </button>
            </div>
          </div>
      
      </div>
    </div>
    </header>
    <nav>
      <li><Link style={linkStyle} to="/">Home</Link></li>
      <li><Link style={linkStyle} to="/Books">Books</Link></li>
      <li><Link style={linkStyle} to="/About">About</Link></li>
      <li><Link style={linkStyle} to="/Contact">Contact</Link></li>

    <li>
      <input type="checkbox" onChange={toggleTheme} id="toggle_checkbox"/>

        <label for="toggle_checkbox">
          <div id="star">
            <div id="moon"></div>
          </div>
          {/* <div id="moon"></div> */}
        </label>      
     </li>
    </nav>
    </section>
      <Outlet />
      <section>
      <footer className="footer">
      <p>Copyright &copy; 2023</p>
    </footer>
   </section>
    </>
  )
};

export default Layout;