import mongoose from "mongoose";


const MenuSchema = new mongoose.Schema({

    Menus :[{
       name:{
        type: String , required: true
    },
    items: {
        type : mongoose.Types.ObjectId, ref: "Foods"
    }}],
    recommend: {
        type: mongoose.Types.ObjectId , ref : "Foods", unqiue : true 
    }

}, {
    timestamps: true
});

export const MenuModel = mongoose.model("Menus" , MenuSchema);