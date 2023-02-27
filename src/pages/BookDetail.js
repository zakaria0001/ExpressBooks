import {Route, Link, Routes, useParams} from 'react-router-dom';
import React,{useState,useEffect} from 'react';
import DefaultBook from '../assets/images/DefaultBook.jpg';
import star from '../assets/images/star.png';

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
    fontSize:"60px",
    marginTop:"10%"

  }
  const StarStyle={
    display:"inline-block",
    width: "30px",
    margin:"1%",
    fontweight:"bold"
   
   
  }
  const subTitle={
    fontSize:"40px",
    color:"grey",
    marginTop:"-3%"
  }
  const ImageBook={
    width:"50%",
    float:"left",
    margin:"5%"
  }
  const BookDetails={
  display:"inline-flex"
  }
  const imgStyle={
    width:"70%",
  }
  const BookInfos={
    width:"50%",
   float:"right"
  }
  const CatButton={
    backgroundColor:"black",
    color:"white",
    width:"20%",
    marginTop:"2%",
    borderRadius:"30px",
    textAlign:"center",
    padding:"2%",
    fontWeight:"bold",
    fontSize:"20px",
  }
  return(
    <React.Fragment>
      
    <div>
{data.map((item) => {
  const { _id,Nom, Description,Editeur,DateEd,Auteur,Categorie,ISBN,Etoiles} = item;
  const Stars = []
          for (var i = 0; i < Etoiles; i++) {
            Stars.push(
              <img style={StarStyle} src={star}/>
            )
          }
  if(_id===params.id){
  return (
   
    <section style={BookDetails}>
      <section style={ImageBook}><img style={imgStyle} src={DefaultBook}/></section>
      <section style={BookInfos}>
        <h1 style={Title}> {Nom}</h1>
        <h1 style={subTitle}>{Auteur}</h1>
        <h1>{Stars==0?"Aucune Étoile":Stars}</h1>
        <h1>{Description}</h1>
        <h1><b>Editeur :</b> {Editeur}</h1>
        <h1><b>Date Publication :</b> {DateEd}</h1>
        <h1><b>ISBN :</b> {ISBN}</h1>
        <h2 style={CatButton}>{Categorie}</h2>
       
        
      </section>
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