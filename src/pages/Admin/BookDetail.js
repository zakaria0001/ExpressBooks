import {Route, Link, Routes, useParams} from 'react-router-dom';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {  useLocation, useNavigate } from "react-router-dom";

const BookDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
  const [NomU, setNom] = useState('');
  const [DescriptionU, setDescription] = useState('');
  const [ISBNU, setISBN] = useState('');
  const [AuteurU, setAuteur] = useState('');
  const [EditeurU, setEditeur] = useState('');
  const [DateEdU, setDateEd] = useState('');
  const [ImageLivreU, setImageLivre] = useState('');
  const [EtoilesU, setEtoiles] = useState('');
  const [CategorieU, setCategorie] = useState('');
  const [message, setMessage] = useState('');

  let handleSubmit = async (e) => {
    e.preventDefault();
        var qs = require('qs');
        var data = qs.stringify({
          Nom:NomU,
          Description:DescriptionU,
          ISBN:ISBNU,
          Auteur:AuteurU,
          Editeur:EditeurU,
          DateEd:'2012-04-23T18:25:43.511Z',
          ImageLivre:ImageLivreU,
          Etoiles:EtoilesU,
          Categorie:CategorieU,

        });
        var config = {
          method: 'put',
          maxBodyLength: Infinity,
          url: 'http://localhost:7777/books/'+params.id,
          data : data
        };

        axios(config)
        .then(function (response) {
         setMessage("Modifié Avec Succès");
         alert(data)

        })
        .catch(function (error) {
          alert(error);
        });
      };

  const inputStyle={
      width:'100%',
      outline:'none',
      backgroundColor:'black',
      borderBottom:'1px solid #5B8FB9',
      fontSize:'20px',
      margin: '1%',
      padding:'10px'
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
      width:'30%',
      margin:'0% 40%',
      height:'50px',
      color:'#5B8FB9',
      fontSize:'20px',
      borderRadius:'30px',
    }
  return(
    <React.Fragment>
      
    <div>
{data.map((item) => {
  const { _id,Nom, Description, Auteur,Editeur,ImageLivre,Categorie,DateEd,ISBN,Etoiles} = item;
  if(_id===params.id){
  return (
   
    <section>
      <form onSubmit={handleSubmit}>
                    
      <table className='table'>
        <tr>
        <td colspan="">
         <input style={inputStyle} value={Nom} onChange={(e) => setNom(e.target.value)}/>
        <br/> 
        <input style={inputStyle}  placeholder={Auteur} value={AuteurU}  onChange={(e) => setAuteur(e.target.value)}/>
        <br/> 
        <input style={inputStyle}  value={Editeur} onChange={(e) => setEditeur(e.target.value)}/>
        <br/> 
        <input style={inputStyle}  defaultValue={DateEd} onChange={(e) => setDateEd(e.target.value)}/>
        <br/> 
        <input style={inputStyle}  defaultValue={ImageLivre} onChange={(e) => setImageLivre(e.target.value)}/>
        </td>
        <td>
          <input style={inputStyle} defaultValue={ISBN} onChange={(e) => setISBN(e.target.value)}  />
        <br/>
        <input style={inputStyle} defaultValue={Categorie} onChange={(e) => setCategorie(e.target.value)}/>
        <br/>
        <input style={inputStyle} defaultValue={Description} onChange={(e) => setDescription(e.target.value)}/>
        <br/>
        <input style={inputStyle} defaultValue={(Etoiles===null)?"Aucune Étoile ":Etoiles} onChange={(e) => setEtoiles(e.target.value)} />
        <br/>
          </td>

        </tr>
        <tr>
        <td>      
            <button type="submit" style={AddB} value="Ajouter">Modifier</button>
            <h1 className="message">{message ? <h1>{message}</h1> : null}</h1></td> 
        </tr>
      </table>

     
        
      </form>
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