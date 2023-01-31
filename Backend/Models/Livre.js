const mongoose = require("mongoose");

const LivreSchema = new mongoose.Schema({
    Nom :{
        type:String,
        required:true,
    },
    Description:{
        type:String,
        required:true,
    },
    ISBN:{
        type:String,
        required:true,
    },
    Auteur:{
        type:String,
        required:true,
    },
    Editeur:{
        type:String,
        required:true,
    },
    DateEd:{
        type:Date,
        required:true,
    },
    ImageLivre:{
        type:String,
        required:true,
    },
    Categorie :{
        type:String,
        required:true,
    }
});
const Livre = mongoose.model("Livre", LivreSchema);
module.exports = Livre;