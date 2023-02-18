import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
const BooksGest =()=>{
  
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
  })
  function Box() {
    return (
      <React.Fragment>
      <section style={AddCat}>
      
      </section>
     
</React.Fragment>
    );
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
  const AddBCat={
    backgroundColor:'#5B8FB9',
    margin:'2% 30%',
    width:'35%'
  }
  const AddCat ={
    backgroundColor:'black',
    borderRadius:'30px',
    padding:'5%',
    width:'100%',
    margin:'1%',
  }
  const Addt ={
    backgroundColor:'#5B8FB9',
    borderRadius:'30px',
    padding:'2%',
    width:'30%',
  }

  const [dataCat,setDataCat]=useState([]);

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

//  Order By | Distinct on JSON 
  // const DistinctCategories = [];
  
  // const uniqueEmployees = dataCat.filter(element => {
  // const isDuplicate = DistinctCategories.includes(element.Categorie);

  // if (!isDuplicate) {
  //   DistinctCategories.push(element.Categorie);
  //   return true;
  // }

  // return false;
// });

const [Nom, setNom] = useState('');
const [Description, setDescription] = useState('');
const [message, setMessage] = useState('');

let handleSubmit = async (e) => {
  e.preventDefault();
      var qs = require('qs');
      var data = qs.stringify({
        Nom:Nom,
        Description:Description,
      });
      var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:7777/Categorie',
        data : data
      };

      axios(config)
      .then(function (response) {
        setMessage("Ajoutée Avec Succès");
        setNom("");
        setDescription("");
      })
      .catch(function (error) {
        setMessage(error);
      });
  } 


function handleRemove(id) {
  var config = {
    method: 'delete',
    maxBodyLength: Infinity,
    url: 'http://localhost:7777/books/'+id,
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };
  
  axios(config)
  .then(function (response) {
   alert(JSON.stringify(response.data));
  })
  .catch(function (error) {
    alert(error);
  });
  
}
function handleRemoveCat(id) {
  var config = {
    method: 'delete',
    maxBodyLength: Infinity,
    url: 'http://localhost:7777/Categorie/'+id,
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };
  
  axios(config)
  .then(function (response) {
   alert(JSON.stringify(response.data));
  })
  .catch(function (error) {
    alert(error);
  });
  
}
  const Title ={
    textAlign:'center',
    marginTop:'-20px',
    fontSize:'30px',
    color:'#5B8FB9'
  }
  const BookstableStyle={
    margin:'1%',
    padding:'1%',
    width:'100%'

  }
  const RightSec={
    float:'right',
    flex:'100%',
    height: '700px', 
    'overflow-y': 'scroll',
  }
  const ButtonsSection={
    padding:'0%',
    margin:'1%',
    float:'left',
    flex:'100%',
  }
  const BodyStyle={
    display:'flex'
  }
    return(
        <React.Fragment>
        <div style={BodyStyle}>
        <section style={ButtonsSection}>
            <button style={Addt} class="bg-#5B8FB9-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"><Link to={'/Admin/AjouterLivre'}>Ajouter Un Livre</Link></button>
            <div>
           <section style={AddCat}>
           <h1 style={Title}> Catégorie : </h1>
             <form onSubmit={handleSubmit}>
              <input type="text" style={inputStyle} placeholder="Nom Catégorie..." onChange={(e) => setNom(e.target.value)}  required />
              <input type="text" style={inputStyle} placeholder="Description..." onChange={(e) => setDescription(e.target.value)}  required />
            <input type="submit" style={AddBCat} class="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" value="Ajouter"/>
              </form>
           </section>
           

    </div>
            <table style={BookstableStyle} class="border-separate border-spacing-2 border border-slate-500">
            
                <thead >
                    <td class="border border-slate-600 ...">Nom</td>
                    <td class="border border-slate-600 ...">Description</td>
                    <td class="border border-slate-600 ...">Actions</td>
                </thead>
                <tbody style={BookstableStyle}>
             
                    {dataCat.map(categorie => {
                    const idCat=categorie._id;
                    const CatNom=categorie.Nom;
                    const CatDesc=categorie.Description;
                    return (
                    <tr>
                        <td>
                            <Link  to={`/Admin/Books/Categorie/${CatNom}`}>{CatNom}</Link>
                        </td> 
                       <td>
                          {(CatDesc==null)?"Aucune Description":CatDesc}
                       </td>
                       <td>
                        <button className='delete-button' onClick={() => { if (window.confirm('Etes Vous Sûr de vouloir supprimer cette Catégorie ?')) handleRemoveCat(idCat) } }>Supprimer</button>

                       </td>
                    </tr>
                    );
                })}
                   
                </tbody>
            </table>
        </section>
        <section style={RightSec}>
            <table style={BookstableStyle} class="border-separate border-spacing-2 border border-slate-500">
            <thead >
                <tr >
                <th class="border border-slate-600 ...">Nom</th>
                <th class="border border-slate-600 ...">Description</th>
                <th class="border border-slate-600 ...">Auteur</th>
                <th class="border border-slate-600 ...">Catégorie</th>
                <th class="border border-slate-600 ..."> Étoiles</th>
                <th class="border border-slate-600"> Actions</th>
                </tr>
            </thead>
            <tbody>
    
             {
                data.map((books)=>{
                    const { _id,Nom, Description, Auteur,Categorie,Etoiles} = books;
                    return(
                        <React.Fragment>
                        <tr>
                            <td><Link to={`/Admin/Books/${_id}`}>{Nom}</Link></td>

                            <td>{Description}</td>
                            <td>{Auteur}</td>
                            <td>{Categorie}</td>
                            <td > {(Etoiles==null)?"Aucune Étoile":Etoiles}</td>
                            <button className='delete-button' onClick={() => { if (window.confirm('Etes Vous Sûr de vouloir supprimer ce livre ?')) handleRemove(_id) } }>Supprimer</button>

                            </tr>

                        </React.Fragment>
                    )
                })
             }  
             </tbody>
            </table>
            
        </section>
        </div>
        </React.Fragment>
    )
}
export default BooksGest