

const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    Nom:{
        type:String,
        required:true,
    },
    Prenom :{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
        unique: true
    },
    MotDePasse:{
        type:String,
        required: true
        },
    Photo: {
     type:String,
     required:true,
    }
});
const Admin =mongoose.model('Admin',AdminSchema);
module.exports = Admin;