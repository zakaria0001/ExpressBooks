import {useState,useEffect} from 'react';
import React from 'react';
import Axios from 'axios';
import { animated, useSpring } from "react-spring";

// import { Link } from "react-router-dom";

  
const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | Admin"
 }, []);

 const [num, setNum] = useState(0);

const randomNumberInRange=()=> {
    // 👇️ get number between min (inclusive) and max (inclusive)
    setNum(Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000);
  }

  const [dataz,setData]=useState([]);
  const [DataFull,setDataFull]=useState([]);
  const [CountBooks,setCountBooks]=useState([]);
  const [CountCategory,setCountCategory]=useState([]);
  
  
  const getDataCat=()=>{
    fetch('http://localhost:7777/categorie'
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
      .then(function(Categories) {
        console.log(Categories);
        setCountCategory(Categories.length);
        setData(Categories)
       
      })
      .catch(function(err) {
        alert(err.message)
      })
  }
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
        setCountBooks(Books.length);

        setDataFull(Books)
      })
      .catch(function(err) {
        alert(err.message)
      })
  }
  useEffect(()=>{
    getData()
    
  },[])  
  useEffect(()=>{
    getDataCat();
    randomNumberInRange()
    
  },[])
  const Box={
    backgroundColor: "rgba(255,255,255)",
    width:"300px",
    height:"200px",
    borderRadius:"30px",
    padding:"2%",
    color:"red",
    margin:"2%"
  }
    return( 
     
      <React.Fragment>
      
        <div className="body">
        <div class="lg:grid w-80 grid-rows-4 grid-flow-col gap-4 ml-10 -mb-60  md:grid w-80 grid-rows-4 grid-flow-col gap-4 sm:flex  ...  w-80 ">
            <div class="py-4">
              <div class="shadow-lg xl:p-8 p-2 w-60 rounded-xl sm:w-auto w-full bg-grey ">
                    <p class="text-3xl font-semibold text-gray-800">{CountBooks}</p>
                    <p class="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Nombre De Livres </p>
                </div>
            </div>
            <div class="py-4">
              <div class="shadow-lg xl:p-8 p-2 w-60 rounded-xl sm:w-auto w-full bg-black ">
                    <p class="text-3xl font-semibold text-gray-800">{CountCategory}</p>
                    <p class="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Nombre De Catégories </p>
                </div>
            </div>
            <div class="py-4">
                <div class="shadow-lg xl:p-8 p-2 w-60 rounded-xl sm:w-auto w-full bg-blue ">
                    <p class="text-3xl font-semibold text-gray-800">{num}</p>
                    <p class="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Nombre De Visiteurs </p>
                </div>
                
            </div> 
            

      </div>

      <div class="lg:flex  flex-col absolute top-0 right-5 items-center  w-full max-w-screen-md p-1 pb-6 bg-white rounded-lg shadow-xl sm:p-8 mt-10   right-5 ">
        <h2 class="text-xl text-black font-bold">Visiteurs 2022 :</h2>
        <div class="flex items-end flex-grow w-full mt-2 space-x-2 sm:space-x-3">
          <div class="relative flex flex-col items-center flex-grow pb-5 group">
            <span class="absolute top-0 hidden -mt-6 text-xs text-black font-bold group-hover:block">1000</span>
            <div class="relative flex justify-center w-full h-8 bg-indigo-200"></div>
            <div class="relative flex justify-center w-full h-6 bg-indigo-300"></div>
            <div class="relative flex justify-center w-full h-16 bg-indigo-400"></div>
            <span class="absolute bottom-0 text-black text-xs font-bold">Jan</span>
          </div>
          <div class="relative flex flex-col items-center flex-grow pb-5 group">
            <span class="absolute top-0 hidden -mt-6 text-xs text-black font-bold group-hover:block">2000</span>
            <div class="relative flex justify-center w-full h-10 bg-indigo-200"></div>
            <div class="relative flex justify-center w-full h-6 bg-indigo-300"></div>
            <div class="relative flex justify-center w-full h-20 bg-indigo-400"></div>
            <span class="absolute bottom-0 text-black text-xs font-bold">Fev</span>
          </div>
          <div class="relative flex flex-col items-center flex-grow pb-5 group">
            <span class="absolute top-0 hidden -mt-6 text-xs text-black font-bold group-hover:block">4000</span>
            <div class="relative flex justify-center w-full h-10 bg-indigo-200"></div>
            <div class="relative flex justify-center w-full h-8 bg-indigo-300"></div>
            <div class="relative flex justify-center w-full h-20 bg-indigo-400"></div>
            <span class="absolute bottom-0 text-black text-xs font-bold">Mars</span>
          </div>
          <div class="relative flex flex-col items-center flex-grow pb-5 group">
            <span class="absolute top-0 hidden -mt-6 text-xs text-black font-bold group-hover:block">5000</span>
            <div class="relative flex justify-center w-full h-10 bg-indigo-200"></div>
            <div class="relative flex justify-center w-full h-6 bg-indigo-300"></div>
            <div class="relative flex justify-center w-full h-24 bg-indigo-400"></div>
            <span class="absolute bottom-0 text-black text-xs font-bold">Avril</span>
          </div>
          <div class="relative flex flex-col items-center flex-grow pb-5 group">
            <span class="absolute top-0 hidden -mt-6 text-xs text-black font-bold group-hover:block">3500</span>
            <div class="relative flex justify-center w-full h-10 bg-indigo-200"></div>
            <div class="relative flex justify-center w-full h-8 bg-indigo-300"></div>
            <div class="relative flex justify-center w-full h-20 bg-indigo-400"></div>
            <span class="absolute bottom-0 text-black text-xs font-bold">Mai</span>
          </div>
          <div class="relative flex flex-col items-center flex-grow pb-5 group">
            <span class="absolute top-0 hidden -mt-6 text-xs text-black font-bold group-hover:block">6000</span>
            <div class="relative flex justify-center w-full h-12 bg-indigo-200"></div>
            <div class="relative flex justify-center w-full h-8 bg-indigo-300"></div>
            <div class="relative flex justify-center w-full h-24 bg-indigo-400"></div>
            <span class="absolute bottom-0 text-black text-xs font-bold">Juin</span>
          </div>
          <div class="relative flex flex-col items-center flex-grow pb-5 group">
            <span class="absolute top-0 hidden -mt-6 text-xs  text-black font-bold group-hover:block">7000</span>
            <div class="relative flex justify-center w-full h-12 bg-indigo-200"></div>
            <div class="relative flex justify-center w-full h-16 bg-indigo-300"></div>
            <div class="relative flex justify-center w-full h-20 bg-indigo-400"></div>
            <span class="absolute bottom-0 text-black text-xs font-bold">Juil</span>
          </div>
          <div class="relative flex flex-col items-center flex-grow pb-5 group">
            <span class="absolute top-0 hidden -mt-6 text-xs text-black font-bold group-hover:block">6500</span>
            <div class="relative flex justify-center w-full h-12 bg-indigo-200"></div>
            <div class="relative flex justify-center w-full h-10 bg-indigo-300"></div>
            <div class="relative flex justify-center w-full h-24 bg-indigo-400"></div>
            <span class="absolute bottom-0 text-black text-xs font-bold">Aout</span>
          </div>
          <div class="relative flex flex-col items-center flex-grow pb-5 group">
            <span class="absolute top-0 hidden -mt-6 text-xs text-black font-bold group-hover:block">7500</span>
            <div class="relative flex justify-center w-full h-12 bg-indigo-200"></div>
            <div class="relative flex justify-center w-full h-10 bg-indigo-300"></div>
            <div class="relative flex justify-center w-full h-32 bg-indigo-400"></div>
            <span class="absolute bottom-0 text-black text-xs font-bold">Sep</span>
          </div>
          <div class="relative flex flex-col items-center flex-grow pb-5 group">
            <span class="absolute top-0 hidden -mt-6 text-xs text-black font-bold group-hover:block">7000</span>
            <div class="relative flex justify-center w-full h-12 bg-indigo-200"></div>
            <div class="relative flex justify-center w-full h-12 bg-indigo-300"></div>
            <div class="relative flex justify-center w-full bg-indigo-400 h-28"></div>
            <span class="absolute bottom-0  text-black text-xs font-bold">Oct</span>
          </div>
          <div class="relative flex flex-col items-center flex-grow pb-5 group">
            <span class="absolute top-0 hidden -mt-6 text-xs text-black font-bold group-hover:block">7600</span>
            <div class="relative flex justify-center w-full h-8 bg-indigo-200"></div>
            <div class="relative flex justify-center w-full h-8 bg-indigo-300"></div>
            <div class="relative flex justify-center w-full h-40 bg-indigo-400"></div>
            <span class="absolute bottom-0 text-black text-xs font-bold">Nov</span>
          </div>
          <div class="relative flex flex-col items-center flex-grow pb-5 group">
            <span class="absolute top-0 hidden -mt-6 text-xs text-black font-bold group-hover:block">8000</span>
            <div class="relative flex justify-center w-full h-12 bg-indigo-200"></div>
            <div class="relative flex justify-center w-full h-8 bg-indigo-300"></div>
            <div class="relative flex justify-center w-full h-40 bg-indigo-400"></div>
            <span class="absolute bottom-0 text-black text-xs font-bold">Dec</span>
          </div>
        </div>
        <div class="flex w-full mt-3">
          <div class="flex items-center ml-auto">
            <span class="block w-4 h-4 bg-indigo-400"></span>
            <span class="ml-1 text-l text-black font-medium">Quotidien</span>
          </div>
          <div class="flex items-center ml-4">
            <span class="block w-4 h-4 bg-indigo-300"></span>
            <span class="ml-1 text-l text-black font-medium">Souvent</span>
          </div>
          <div class="flex items-center ml-4">
            <span class="block w-4 h-4 bg-indigo-200"></span>
            <span class="ml-1 text-l text-black font-medium">Une Seule Visite</span>
          </div>
        </div>
      </div>
          <div class="lg:flex  flex-col absolute right-5 p-2  w-full max-w-screen-md  pb-6 bg-white rounded-lg shadow-xl ">
              <h1 class="text-black text-center font-bold text-xl mb-7">Catégories Populaires :</h1>
                <table>
                  <thead>
                    <tr class="text-black ">
                      <td>Nom Catégorie :</td>
                      <td>Nombre Livres :</td>
                    </tr>
                  </thead>
                  <tbody class="text-blue">
                  
                    {  
                      dataz.map((item) =>{
                      const { _id,Nom, Description} = item;

                      const movies = DataFull.filter(item => item.Categorie === Nom);
                      const moviesCount = movies.length;

                      return(
                        <React.Fragment>
                          <tr>
                            <td> {Nom} </td>                       
                            <td> {moviesCount} </td>                       
                          </tr>

                        </React.Fragment>
        
                        )
               
                
              })} 
                  
                  </tbody>
                </table>
          </div>

          </div>

        
      </React.Fragment>
    
    );
  };
  
  export default Dashboard;