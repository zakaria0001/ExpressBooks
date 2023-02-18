
import axios from 'axios';
import React, { useState,useEffect  } from 'react'
import {  useLocation, useNavigate } from "react-router-dom";


const Login = () => {
    const [Email, setEmail] = useState('');
    const [MotDePasse, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const Auth = async (e) => {
        try {
            await axios.post('http://localhost:7777/login', {
                Email: Email,
                MotDePasse: MotDePasse
            });
            
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
const StyleBox={
    width:'30%',
    margin:'5% 35%',
    backgroundColor:'black',
    padding:'5%',
    borderRadius:'30px',

}
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
  

const handleSubmit = (e) => {
    
    var idEM=document.getElementById("email");
    var idMdp=document.getElementById("password");
    if(idEM.value!="" && idMdp.value!=""){
        const redirectTo = location.search.replace("?redirectTo=", "");

        navigate(redirectTo ? redirectTo : "/Admin/Dashboard");
    }
  }

    return(
        <React.Fragment >
        <section className={`App ${theme}`}>
        <nav>
          <li>Admin Section </li>
       
          <li>
            <input type="checkbox" onChange={toggleTheme} id="toggle_checkbox"/>
            <label class="NVB" for="toggle_checkbox">
            <div id="star"></div>
            <div id="moon"></div>
            </label>      
         </li>
        </nav>

        <form onSubmit={(e)=>Auth(e)} method="post" style={StyleBox}> 
                <div class="mb-1">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email :</label>
                    <input type="email" id="email" name="Email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div class="mb-6">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot De Passe :</label>
                    <input type="password" name="MotDePasse" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  onChange={(e) => setPassword(e.target.value)} required/>
                </div>
            
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>
        </section>
        </React.Fragment>
         
    );
    }
  
  export default Login;