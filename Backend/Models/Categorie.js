const mongoose = require('mongoose');

const CategorieSchema=new mongoose.Schema({
    Nom:{
        type:String,
        required:true,
        unique:true,
    },
    Description:{
        type:String,
        required:false
    }
    
});

const Categorie= mongoose.model("Categorie",CategorieSchema);
module.exports = Categorie;