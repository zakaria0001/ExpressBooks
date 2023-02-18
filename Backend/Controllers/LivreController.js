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
const getBooksByName=(req,res)=>{
    Livre.find({Nom:req.params.NomLivre})
    .then((Books)=>{res.json(Books)})
    .catch(error=>{res.json("Aucun Livre Trouvé")})
}
const getBooksByCategory=(req,res)=>{
    Livre.find({Categorie:req.params.Categorie})
    .then((books)=>{res.json(books);})
    .catch(error=>{res.json("Aucun Livre Disponible")})
}
 const AddBook=(req,res)=>{
    Livre.create(req.body)
    .then(Bookresult=>res.json({message:"Livre Ajouté Avec Succès"}))
    .catch(error=>res.json({message:" Erreur Lors De L'ajout Vérifiez Les Champs !"}))
 }
const UpdateBookInfos=(req,res)=>{
    Livre.findByIdAndUpdate(req.params._id,{
        Nom: req.body.Nom,
        Description: req.body.Description,
        ISBN: req.body.ISBN,
        Auteur: req.body.Auteur,
        Editeur: req.body.Editeur,
        DateEd: req.body.DateEd,
        ImageLivre: req.body.ImageLivre,
        Etoiles: req.body.Etoiles,
        Categorie: req.body.Categorie,
      },
      {new: true})
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
 module.exports ={getAllBooks,AddBook,DeleteBook,getBookById,UpdateBookInfos,getBooksByCategory,getBooksByName}