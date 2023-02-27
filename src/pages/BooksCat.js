import {Route, Link, Routes, useParams} from 'react-router-dom';
import React,{useState,useEffect} from 'react';
import star from '../assets/images/star.png';

const BooksCat = () => {
    const params = useParams();
    const SelectedCat= params.Categorie;
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
    margin:"20px",
    width:"100%",
    height:"250px"
    
  };

  const StarStyle={
    display:"inline-block",
    width: "15%",
  }
  const Title={
    fontSize: 35,
    marginLeft: 20,
    fontWeight: "bold",
    textAlign: "center",
  }
  const StarContainer={
    width: "100%",
    marginBottom:"10px",
    height:"50px"
  }
  const Books={
    display: "inline-flex",
    width:"30%"
  }

    return(
    <React.Fragment>
        <div class="bg-[#bfb6b6c0]">
      <h1 style={Title}>{SelectedCat} : </h1>

{data.map((item) => {
   
  const { _id,Nom, Description, Auteur,Categorie,ISBN,Etoiles} = item;
  const Stars = []
            for (var i = 0; i < Etoiles; i++) {
              Stars.push(
                <img style={StarStyle} src={star}/>
              )
            }
  if(Categorie===SelectedCat){
  return (
   
    <section style={Books}>
    <div style={spanStyles} className="card" class="max-w-sm p-6 bg-white border h-100  text-brown rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <Link to={`/Books/${_id}`} class="text-red">
                          <h5 class="mb-2  text-2xl font-bold tracking-tight text-brown"> {Nom} | {Auteur}</h5>
                      </Link>
                      <p class="mb-3 font-normal text-gray-700 text-brown dark:text-gray-400">{Description}</p>
                      <section style={StarContainer} class="text-black">
                      {(Stars==0)?"Aucune Etoile":Stars}
                      </section>
                      <Link class="inline-flex items-center px-8 py-3 text-sm font-medium text-center bg-black  text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" to={`/Books/${_id}`}>Plus De Détails</Link>
                  </div>
    </section>
    
  );
}

})}
</div>
</React.Fragment>



  
 )
  };
  
  export default BooksCat;