import {Route, Link, Routes, useParams} from 'react-router-dom';
import React,{useState,useEffect} from 'react';

const ProfilDetail = () => {
    const Title={
        fontSize: 25
      }
      const StyleBox={
        margin:'5% 20%',
        padding:'2% 0%',
        backgroundColor:'black',
        borderRadius:'30px',
    
    }
      const UpdateBAdmin={
        backgroundColor:'#5B8FB9',
        margin:'2% 10% ',
        borderRadius:'30px',
        padding:'10px',
        width:'30%'
      }
      const ProfilePic={
        textAlign:'center'
      }
      const inputStyle={
        color:'#5B8FB9',
        outline:'none',
        width:'48%',
        height:'40px',
        borderBottom:'1px solid #5B8FB9',
        backgroundColor:'black',
        
        fontSize:'20px',
        margin:'10px 10px 0px 0px',
        display:'inline-flex'
      }
      const tableStyle={
        width:'100%',
        margin:'5% 25%'
      }
    const params = useParams();
    const [data,setData]=useState([]);
    const getData=()=>{
      fetch('http://localhost:7777/Admin/'
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



    return(
        <React.Fragment>
      
        <div>
        {data.map((item) => {
            const { _id,Nom,Prenom,Email,MotDePasse,Photo} = item;
            return (
             
              <section style={StyleBox}>
              <table style={tableStyle}>
                <tr style={ProfilePic}>
                    <td><img src={Photo} alt="profile Pic" /></td>
                </tr>
                <tr>
                    <td> <input style={inputStyle} defaultValue={Nom}/></td>
                </tr>
                <tr>
                        <td><input type="text" defaultValue={Prenom} style={inputStyle}/> </td>
                </tr>
                <tr>
                    <td><input defaultValue={Email} style={inputStyle}/></td> 
                </tr>
                <tr>
                    <td><input type="password" style={inputStyle} defaultValue={MotDePasse}/> </td>
                </tr>
                <tr>
                    <td><input type="submit" value="Modifier Infos" style={UpdateBAdmin} /></td>
                </tr>
              </table>
                
               
              
               

                {/* <h4>{ISBN}</h4>
                <h2>{Categorie}</h2>
                <h2>{Description}</h2>
                <h2>{Etoiles}</h2> */}
                
              </section>
              
            );
          
          })}
          </div>
    </React.Fragment>
    );
    
  };
  
  export default ProfilDetail;