import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {  useLocation, useNavigate } from "react-router-dom";
import star from '../../assets/images/star.png';

const AddBook=()=>{
  var Rating = require('react-rating');
  
    const navigate = useNavigate();
    const location = useLocation();
    const StyleBox={
        width:'50%',padding:'30px',
        margin:'5% 27%',
        backgroundColor:'black',
        borderRadius:'30px',
        color:'#5B8FB9'
    }
    const inputStyle={
      width:'100%',
      height:'30px',
      outline:'none',
      borderRadius:'5px',
      backgroundColor:'black',
      borderBottom:'1px solid #5B8FB9',
      fontSize:'20px',
      margin: '1%',

    }
const tableStyle={
  width:'100%',
}
    const Title={
        fontSize:'40px',
        textAlign:'center',
        position:'relative',
    }
    const AddB={
      backgroundColor:'#FFFFFF',
      color:'#5B8FB9',
      fontSize:'20px',
      margin:'10% 0% 0% 50%',
      padding:'5%',
      width:'100%',
      borderRadius:'30px',
    }
  const [dataCat,setDataCat]=useState([]);
  const [Nom, setNom] = useState('');
  const [Description, setDescription] = useState('');
  const [ISBN, setISBN] = useState('');
  const [Auteur, setAuteur] = useState('');
  const [Editeur, setEditeur] = useState('');
  const [DateEd, setDateEd] = useState('');
  const [ImageLivre, setImageLivre] = useState('');
  const [Etoiles, setEtoiles] = useState('');
  const [Categorie, setCategorie] = useState('');
  // const [message, setMessage] = useState('');
  const getDataCat=()=>{
    fetch('http://localhost:7777/Categorie'
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
        setDataCat(Books)
      });
  }
  useEffect(()=>{
    getDataCat()
  })
  let handleSubmit = async (e) => {
    e.preventDefault();
        var qs = require('qs');
        var data = qs.stringify({
          Nom:Nom,
          Description:Description,
          ISBN:ISBN,
          Auteur:Auteur,
          Editeur:Editeur,
          DateEd:'2012-04-23T18:25:43.511Z',
          ImageLivre:ImageLivre,
          Etoiles:Etoiles,
          Categorie:Categorie,

        });
        var config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'http://localhost:7777/books',
          data : data
        };

        axios(config)
        .then(function (response) {
          const redirectTo = location.search.replace("?redirectTo=", "");
          navigate(redirectTo ? redirectTo : "/Admin/Livres");
          
        })
        .catch(function (error) {
          alert(error);
        });
    }    
    

    return (
        
        <form style={StyleBox} onSubmit={handleSubmit}> 
         <h1 style={Title}>Ajouter Un Livre :</h1>
        <table style={tableStyle} class="border-separate p-8">
            <tr>
                <td colspan="5" ><input style={inputStyle}  type="text" name="Nom" placeholder="Nom" value={Nom} onChange={(e) => setNom(e.target.value)} required /></td>
            </tr>
            <tr>
                <td colspan="5"><input style={inputStyle} type="textarea" name="Description" placeholder="Description" value={Description} onChange={(e) => setDescription(e.target.value)} required /></td>
            </tr>
            <tr>
                <td colspan="5"><input style={inputStyle} type="text" name="ISBN" placeholder="ISBN " value={ISBN} onChange={(e) => setISBN(e.target.value)} required/></td>
             </tr>
             <tr>
                <td colspan="2" ><input style={inputStyle} type="text" name="Auteur" placeholder="Auteur" value={Auteur} onChange={(e) => setAuteur(e.target.value)} required/></td>
           
                <td colspan="2"><input style={inputStyle} type="text" name="Editeur" placeholder="Editeur" value={Editeur} onChange={(e) => setEditeur(e.target.value)} required/></td>
             </tr>
             <tr>   
                <td colspan="5"> <input style={inputStyle} type="date" name="DateEd" placeholder="Date Edition" value={DateEd} onChange={(e) => setDateEd(e.target.value)} required/></td>
              </tr>
              <tr>  
                <td colspan="5"><input style={inputStyle} type="text" name="ImageLivre" placeholder="ImageLivre" value={ImageLivre} onChange={(e) => setImageLivre(e.target.value)} required/></td>
              </tr>  
              <tr>
               <td colspan="2"><input style={inputStyle} type="number" min="0" max="5" name="Etoiles" placeholder="Étoiles" value={Etoiles} onChange={(e) => setEtoiles(e.target.value)} required/></td>
               <td colspan="2">
               <select style={inputStyle} type="text" name="Categorie" onChange={(e) => setCategorie(e.target.value)} required >
                <option selected value="Selectionnez Une Cat" >Selectionnez Une Cat</option>
               {dataCat.map(categorie => {
                  
                    const CatNom=categorie.Nom;
                   
                    return (
                        <option value={CatNom}>{CatNom}</option>
                    );
                })}
                </select>
                </td>
            </tr>
            <tr>
            <Rating />
            </tr>
            <tr>
                <button type="submit" style={AddB} value="Ajouter">Ajouter</button>
                {/* <div className="message">{message ? <h1>{message}</h1> : null}</div> */}

            </tr>
        </table>

        </form>
    )

    
}
export default AddBook