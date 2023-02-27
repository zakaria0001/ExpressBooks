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
    display: "inline-block",
    boxShadow:"10px black",
    margin:"20px",
    width:"100%",
  };
  const Title={
    fontSize: 25,
    marginLeft: 20,
  }
  const StarContainer={
    width: "100%",
    marginBottom:"10px",
    height:"50px"

  }
  const StarStyle={
    display:"inline-block",
    width: "15px",
  }
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
            <div class="bg-[#bfb6b6c0]">

      {uniqueEmployees.map(categorie => {
        const Cat=categorie.Categorie;
       
        const bookss = data.filter(item => item.Categorie === Cat);
        const bookscount = bookss.length;

     
        return (
          <React.Fragment>
          <div class="category flex flex-col  ml-6 mr-4 ">
      <div style={{height:'20px'}} aria-hidden="true" class="wp-block-spacer"></div>
      <p class="text-2xl  font-mono text-gray-800  font-serif mt-3 ">{Cat} ({bookscount}) : <Link class=" font-semibold " to={`/Books/Categorie/${Cat}`}>(Voir Plus)</Link></p>

          <div >
            
            
           {  data.slice(data.length - 5).map((item,index)=>{
            const { _id,Nom, Description, Auteur,Categorie,Etoiles} = item;
            const Stars = []
            for (var i = 0; i < Etoiles; i++) {
              Stars.push(
                <img style={StarStyle} src={star}/>
              )
            }
            if(Categorie==Cat ){
            
              return(
              <React.Fragment>
                 <div style={spanStyles} className="card" class="max-w-sm p-6 bg-white border  text-brown rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <Link to={`/Books/${_id}`} class="text-red">
                          <h5 class="mb-2  text-2xl font-bold tracking-tight text-brown"> {Nom} | {Auteur}</h5>
                      </Link>
                      <p class="mb-3 font-normal text-gray-700 text-brown dark:text-gray-400">{Description}</p>
                      <section style={StarContainer}>
                      {(Stars==0)?"Aucune Etoile":Stars}
                      </section>
                      <Link class="inline-flex items-center px-8 py-3 text-sm font-medium text-center bg-black  text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" to={`/Books/${_id}`}>Plus De Détails</Link>
                  </div>
          
              </React.Fragment>
              )
            } 
            
            
            
            })}  
          </div>
          </div>
          </React.Fragment>
        );
      })}
      
    </div> 
    </React.Fragment>
        )
  };
  
  export default Books;