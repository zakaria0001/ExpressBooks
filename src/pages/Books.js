import React,{useState,useEffect} from 'react';
import { Outlet, Link } from "react-router-dom";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])


  return (
    <section className="App">
     
     {/* {
       data && data.length>0 && 
     } */}
    

    
     {data.map((item)=>{
          const { _id,Nom, Description, Auteur} = item;
          const Categorie = item.Categorie;
      

          return(
              <Card  style={{display: 'inline-block' ,marginRight:'1%',marginTop:'1%'}}sx={{ Width: 105, Height:160 }} key={_id}>
              <p style={{width:'100%',backgroundColor:'red'}}> {Categorie}</p>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                  />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {Nom} | {Auteur}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   {Description}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                 
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to={`${_id}`}>Plus De Détails</Link>
                 
                </CardActions>
              </Card>
              
          )
          } 
        )}
    </section>
  );   
  };
  
  export default Books;