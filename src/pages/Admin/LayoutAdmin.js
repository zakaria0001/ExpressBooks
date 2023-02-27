import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import ProfileIcon from '../../assets/images/icones/icons8-utilisateur-entouré-64.png';
import BookIcon from '../../assets/images/icones/icons8-livre-64.png';
import StatsIcon from '../../assets/images/icones/icons8-graphique-64.png';


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
    <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-20 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-black" aria-label="Sidebar">

    <Link to="/Admin/Dashboard">
    <li>
        <img src={StatsIcon}/>
      </li>
    </Link>
    <Link to="/Admin/Livres">
      <li><img src={BookIcon}/> </li>
    </Link>
    <Link to="/Admin/Profile/63dd28b567694266ec592505">
       <li><img src={ProfileIcon} /> </li>
    </Link>
    
    <li className="darktogll">
      <input type="checkbox" onChange={toggleTheme} id="toggle_checkbox"/>
      <label class="NVB" for="toggle_checkbox">
          <div id="star"> </div>
          <div id="moon"></div>
       </label>      
     </li>
    </aside>
    </section>
      <Outlet />
      
    </>
  )
}
export default LayoutAdmin