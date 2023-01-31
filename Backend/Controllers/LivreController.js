const Livre = require("../Models/Livre");

const getAllBooks=(req,res)=>{
    Livre.find()
    .then((LivreResult)=>{
        res.json(LivreResult)
    })
    .catch((err)=>{
        res.send(err)
    })
 }
const getBookById=(req,res)=>{
    Livre.findOne({_id:req.params.id})
    .then(BooksData=>{res.json(BooksData)})
    .catch(error=>{res.json("Aucun Livre Portant Cet ID N'est Disponible")})
}
 const AddBook=(req,res)=>{
    Livre.create(req.body)
    .then(Bookresult=>res.json({message:"Livre Ajouté Avec Succès"}))
    .catch(error=>res.json({message:" Erreur Lors De L'ajout Vérifiez Les Champs !"}))
 }
const UpdateBookInfos=(req,res)=>{
    Livre.findByIdAndUpdate(req.params.id)
    .then(Bookresult=>res.json({message:"Livre Modifié Avec Succès"}))
    .catch(error=>res.json({message:" Erreur Lors De La Modification Vérifiez Les Champs !"}))
}
 const DeleteBook=(req,res)=>{
    Livre.findByIdAndDelete({
        _id:req.params.id
    })  
    .then(BookResult=>res.json({message:"Livre Supprimé Avec Succès"}))
    .catch((err)=>res.json({message:" Erreur Lors De La Suppression Vérifiez Les Champs !"}))
 }
 module.exports ={getAllBooks,AddBook,DeleteBook,getBookById,UpdateBookInfos}