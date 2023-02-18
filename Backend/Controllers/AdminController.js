const Admin= require("../Models/Admin");
const bcrypt = require("bcrypt");

const GetAdminsList=(req,res)=>{
    Admin.find()
    .then((AdminsList)=>{
        res.json(AdminsList);
    })
    .catch((err)=>{
        res.send(err)
    })
}
const AddAdmin=(req,res)=>{
    bcrypt
    .hash(req.body.MotDePasse, 10)
    .then((hashedPassword) => {
      const admin = new Admin({
        Email: req.body.Email,
        Nom: req.body.Nom,
        Prenom: req.body.Prenom,
        Photo: req.body.Photo,
        MotDePasse: hashedPassword,
      });

      admin
        .save()
        .then((result) => {
          res.status(201).send({
            message: "Admin Créé Avec Succès",
            result,
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: "Erreur Lors De la création de l'admin",
            error,
          });
        });
    })
    .catch((e) => {
      res.status(500).send({
        message: "Password was not hashed successfully",
        e,
      });
    });


}
const DeleteAdmin=(req,res)=>{
    Admin.findByIdAndDelete({_id:req.params.id})
    .then((DeleteMessage)=>res.json({message:"Admin Supprimé Avec Succès"}))
    .catch((error)=>{
        res.json(error)
    });
}
const getAdminByid=(req,res)=>{
  Admin.findOne({_id:req.params.id})
  .then(AdminData=>{res.json(AdminData)})
  .catch(error=>{res.json("Aucun Admin Portant Cet ID N'est Disponible")})
}

const UpdateAdminInfos=(req,res)=>{
    Admin.findByIdAndUpdate(req.params.id,{
        Nom: req.body.Nom,
        Prenom: req.body.Prenom,
        Email: req.body.Email,
        MotDePasse: req.body.MotDePasse,
        Photo: req.body.Photo,
      },
      {new: true}) 
    .then(AdminResult=>res.json({message:"Admin Modifié Avec Succès"}))
    .catch(error=>res.json({message:" Erreur Lors De La Modification Vérifiez Les Champs !"}))
}

module.exports ={GetAdminsList,AddAdmin,DeleteAdmin,UpdateAdminInfos,getAdminByid}