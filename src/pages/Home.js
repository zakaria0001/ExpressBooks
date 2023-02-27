import React,{useState,useEffect} from 'react';
import { useScroll } from "react-use-gesture";
import { Helmet } from 'react-helmet';
import DefaultBook from '../assets/images/DefaultBook.jpg';

import { Outlet, Link } from "react-router-dom";
import star from '../assets/images/star.png';
import '../assets/style/Home.css';
import { animated, useSpring } from "react-spring";

function Home () {
  useEffect(() => {
    document.title = "Home | ExpressBooks"
 }, []);
 
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
  
  const uniqueCategories = data.filter(element => {
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
    display: "block",
    backgroundColor:"white",
borderRadius:"0px",
    display:"inline-flex",
    width:"30%",
    margin:"0% 35%",
  };
  const StarStyle={
    display:"inline-block",
    width: "15px",
  }
  const StarStyleSearch={
    display:"inline-flex",
    float:"right",
  }
 
  const SearchBar={
    margin:"0% 0% -2%",
    padding:'3%',
    width:'100%',
    borderRadius:'10px',
   
    outline:'none',
    color:'black'
  }
  const SearchSection={
    width:'100%',
    textAlign:'center',
    marginBottom:"7%",
    marginTop:"2%",

    
  }
  const StarContainer={
    width: "100%",
    marginBottom:"10px",
    height:"50px"

  }
  const SearchB={
    display:"inline-flex",
    width:"30%",
    backgroundColor:"white",
    color:"red",
    borderTopLeftRadius:'10px',
    borderTopRightRadius:'10px',

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
  const imgStyle={
   width:"10px"
  }
const rightbookinfo={
  position:"relative",
  float:'right',


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
    if(event.target.value!=""){
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
        setMessage(Bookss);
      }).catch();
  }else{
    console.log('value is:', event.target.value);
  }
        
  };
  
    
  return (
    
    <React.Fragment>
    
     <section className="home">
     <div style={SearchSection}>
        <div style={SearchB}>
        <input
        placeholder="Cherchez Votre Livre Préferé "
        style={SearchBar}
          type="text"
          id="message"
          name="message"
          onChange={handleChange}/>
    
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
                  <ul  class="py-2 text-sm text-black-700 dark:text-black-200" aria-labelledby="dropdownHoverButton">
                    <li className="dropD">
                      <Link to={`/Books/${_id}`} class="block px-4 py-2 hover:bg-black-100 dark:hover:bg-black-600 dark:hover:text-black text-black-900">
                      
                      <section class="container">
   
    <article>
     <h1>{Nom}</h1> 
     <h2>{Auteur}</h2>

    </article>
    <section className="star">{Stars}</section>

  </section>
  

                      </Link>
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

      </div>
      
      <div className="book-banner">
        <div className='book-banner-title'>
        <h1  class="mt-3">Best-Sellers</h1>
      <a href='/Books'><p className="see-more">(Voir Plus)</p></a>
      </div>
          
      
      
      
<div className="book-banner-content">

       {  data.map((item)=>{

            const { _id,Nom, Description, Auteur,Categorie,Etoiles} = item;
            const Stars = []
            for (var i = 0; i < Etoiles; i++) {
              Stars.push(
                <img style={StarStyle} src={star}/>
              )
            }
            if(Etoiles>=3){
              return(
              <React.Fragment>
              <div className="SingleBook">
              <ul key={_id}>
                <img src={DefaultBook}  width={'100px'} height={'150px'} />
                <div className="book-info">
                <a href={`/Books/${_id}`} className="button">{Nom}</a> <br/>
                </div>
                </ul>
                </div>
              </React.Fragment>
              )
            } 
            
            
           
       })}
       </div>
       </div>
    </section>
   
   
   </React.Fragment>
   
  );
  
}
export default Home;