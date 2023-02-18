import React,{useState,useEffect} from 'react';
import { useScroll } from "react-use-gesture";

import { Outlet, Link } from "react-router-dom";
import star from '../assets/images/star.png';
import '../assets/style/Home.css';
import { animated, useSpring } from "react-spring";

function Home () {
  const [data,setData]=useState([]);
  const getData= async ()=>{
    await fetch('http://localhost:7777/Books'
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
  const DistinctCategories = [];
  
  const uniqueEmployees = data.filter(element => {
  const isDuplicate = DistinctCategories.includes(element.Categorie);

  if (!isDuplicate) {
    DistinctCategories.push(element.Categorie);
    return true;
  }

  return false;
});
//Style : 
  const spanStyles = {
    color: "#fff",
    borderColor: "#00f",
    display: "inline-block",
    margin:"20px",
    width:"100%"
  };
  const spanStylesList = {
    color: "black",
    borderColor: "#00f",
    display: "inline-block",
    
    
    marginBottom:"4%",
    borderRadius:"0px",
    width:"30%",
    marginBottom:'10px',
    
  };
  const StarStyle={
    display:"inline-block",
    width: "15px",
  }
 
  const SearchBar={
    margin:'3%',
    padding:'1%',
    width:'30%',
    borderTopLeftRadius:'10px',
    borderTopRightRadius:'10px',
    outline:'none',
    color:'black'
  }
  const SearchSection={
    width:'100%',
    
  }
  const StarContainer={
    width: "100%",
    marginBottom:"10px",
    height:"50px"

  }
  
  const Title={
    fontSize: 25,
    marginLeft: 20,
  }
  const More={
   marginLeft: "2%",
   color: "black",
   textDecoration: "underline",
  }

  const [style, set] = useSpring(() => ({
    from: {
      transform: "rotateY(0deg)"
    },
    transform: "rotateY(25deg)",
    
  }));

  const bind = useScroll(event => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`
    });
  });
  const clamp = (value: number, clampAt: number = 30) => {
    if (value > 0) {
      return value > clampAt ? clampAt : value;
    } else {
      return value < -clampAt ? -clampAt : value;
    }
  };


  const [Message, setMessage] = useState([]);
  

  const handleChange = event => {
    if(event.target.value!=null){
    fetch('http://localhost:7777/Books/Search/'+event.target.value
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response);
        return response.json();
      }).then(function(Bookss) {
        console.log(Bookss);
        setMessage(Bookss);
      }).catch();
    console.log('value is:', event.target.value);
  }else{
    console.log('value is:', event.target.value);
  }

  };
  
    
  return (
    <React.Fragment>
    <section className="App">
      <div style={SearchSection}>
        <input
        placeholder="Cherchez Votre Livre Préferé "
        style={SearchBar}
          type="text"
          id="message"
          name="message"
          onChange={handleChange}
          
        />
      </div>
      
      {  Message.map((items)=>{
          if(Message!='null'){
          const { _id,Nom, Description, Auteur,Categorie,Etoiles} = items;
          const Stars = []
          for (var i = 0; i < Etoiles; i++) {
            Stars.push(
              <img style={StarStyle} src={star}/>
            )
          }
                  
            return(
            <React.Fragment>
           
                <div style={spanStylesList} id="dropdownHover" class="z-10 hidden bg-white divide-y divide-black-100 rounded-lg shadow w-44 dark:bg-black-700">
    <ul class="py-2 text-sm text-black-700 dark:text-black-200" aria-labelledby="dropdownHoverButton">
      <li>
        <Link to={`/Books/${_id}`} class="block px-4 py-2 hover:bg-black-100 dark:hover:bg-black-600 dark:hover:text-black text-black-900">{Nom}</Link>
      </li>

    </ul>
</div>
            </React.Fragment>
            );
          }else{
              <h1>Aucun Résultat</h1>
          }


            })
      } 
<h1 style={Title}>Livres Populaires :</h1>
<section className="container" {...bind()}>
       {  data.map((item)=>{

            const { _id,Nom, Description, Auteur,Categorie,Etoiles} = item;
            const Stars = []
            for (var i = 0; i < Etoiles; i++) {
              Stars.push(
                <img style={StarStyle} src={star}/>
              )
            }
            if(Etoiles>=0){
              return(
              <React.Fragment>
              <animated.div
              class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            className="card"
            style={{...style}}>
                      <a href="#">
                          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"> {Nom} | {Auteur}</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{Description}</p>
                      <section style={StarContainer}>
                      {Stars}
                      </section>
                     
                     
                      <Link class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" to={`/Books/${_id}`}>Plus De Détails</Link>
                  </animated.div>
              </React.Fragment>
              )
            } 
            
            
           
       })}
    </section>
   
   </section>
   <React.Fragment>
            
          <div>
      {uniqueEmployees.map(categorie => {
        const Cat=categorie.Categorie;
        return (
          <div>
            
            <h1 style={Title}> {(Cat==null)?"Autre":Cat} :  <Link style={More} to={`/Books/Categorie/${Cat}`}>Voir Plus ..</Link>  </h1>
            
           {  data.map((item,index)=>{
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
                 <div style={spanStyles} class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <Link to={`/Books/${_id}`}>
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {Nom} | {Auteur}</h5>
                      </Link>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{Description}</p>
                      <section style={StarContainer}>
                      {(Stars==0)?"Aucune Etoile":Stars}
                      </section>
                      <Link class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" to={`/Books/${_id}`}>Plus De Détails</Link>
                  </div>
              </React.Fragment>
              )
            } 
            
            
            
            })}  
          </div>
          
        );
      })}
    </div>
    </React.Fragment>
   </React.Fragment>
   
  );
  
}
export default Home;