import {Route, Link, Routes, useParams} from 'react-router-dom';
import React,{useState,useEffect} from 'react';
const BookDetail = () => {
  const params = useParams();
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
  
  const Title={
    fontSize: 25
  }
  return(
    <React.Fragment>
      
    <div>
{data.map((item) => {
  const { _id,Nom, Description, Auteur,Categorie,ISBN,Etoiles} = item;
  if(_id===params.id){
  return (
   
    <section>
      
      <h1 style={Title}> {Nom}</h1>
      <h4>{ISBN}</h4>
      <h2>{Categorie}</h2>
      <h2>{Description}</h2>
      <h2>{Etoiles}</h2>
      
    </section>
    
  );
}
})}
</div>
</React.Fragment>
)
  
  console.log(params); 

  };
  
  export default BookDetail;