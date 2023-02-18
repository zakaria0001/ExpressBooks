import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";


const LayoutAdmin = () => {
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
  
//   const linkStyle = {
   
//     textDecoration: "none",
//     color: 'white'
//   };
  return (
    
    <>

    <section className={`App ${theme}`}>
    <nav>
    <Link to="/Admin/Dashboard">
    <li>
        Admin Section 
      </li>
    </Link>
    <Link to="/Admin/Livres">
      <li>Livres </li>
    </Link>
    <Link to="/Admin/Profile/63dd28b567694266ec592505">
       <li>Profile </li>
    </Link>
    
    <li>
      <input type="checkbox" onChange={toggleTheme} id="toggle_checkbox"/>
      <label class="NVB" for="toggle_checkbox">
          <div id="star"> </div>
          <div id="moon"></div>
       </label>      
     </li>
    </nav>
    </section>
      <Outlet />
      
    </>
  )
}
export default LayoutAdmin