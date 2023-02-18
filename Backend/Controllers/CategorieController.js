const Categorie = require("../Models/Categorie");

const GetCategorieList=(req,res)=>{
    Categorie.find()
    .then((CatList)=>{
        res.json(CatList);
    })
    .catch((err)=>{ 
        res.status()
        res.json(err.message);
    })
}

const AddCategorie=(req,res)=>{
    Categorie.create(req.body)
    .then(CatRes=>res.json({message:"Categorie Ajoutée Avec Succès"}))
    .catch(error=>res.json({message:" Erreur Lors De L'ajout Vérifiez Les Champs !"}))
};
const RemoveCategorie=(req,res)=>{
    Categorie.findByIdAndDelete({
        _id:req.params.id
    })  
    .then(CatRes=>res.json({message:"Catégorie Supprimée Avec Succès"}))
    .catch((err)=>res.json({message:" Erreur Lors De La Suppression Vérifiez Les Champs !"}))
}
module.exports ={GetCategorieList,AddCategorie,RemoveCategorie}