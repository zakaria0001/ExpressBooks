import React,{useState,useEffect} from 'react';
import { Outlet, Link } from "react-router-dom";
import star from '../assets/images/star.png';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint-plugin-disable-all-except react, jsx-a11y */
const Books = () => {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('http://localhost:7777/Books'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(Books) {
        console.log(Books);
        setData(Books)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  const spanStyles = {
    color: "#fff",
    borderColor: "#00f",
    display: "inline-block",
    margin:"20px",
    width:"100%",
  };

  const More={
   marginLeft: "2%",
   color: "black",
   textDecoration: "underline",
  }
  const DistinctCategories = [];
  
  const uniqueEmployees = data.filter(element => {
  const isDuplicate = DistinctCategories.includes(element.Categorie);

  if (!isDuplicate) {
    DistinctCategories.push(element.Categorie);
    return true;
  }

  return false;
});
        return(
          <React.Fragment>
            
          <div>
      {uniqueEmployees.map(categorie => {
        const Cat=categorie.Categorie;
        return (
          <div>
            <Link  style={spanStyles}class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" to={`Categorie/${Cat}`}>{Cat}</Link>
          </div> 
        );
      })}
    </div>
    </React.Fragment>
)

  };
  
  export default Books;