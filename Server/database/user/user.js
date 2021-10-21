// import mongoose from "mongoose";


// const UserSchema = new mongoose.Schema({
//   fullname: {type: String, required: true},
//   email: {type: String, required: true},
//   password: {type: String},
//   address: [{detail: {type:String}, for:{type:String}}],
//   phoneNumber: [{type: Number}]
// });

// export const UserModel = mongoose.model("Users", UserSchema);

import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
const UserSchema = new mongoose.Schema({ 

    fullname : {type: String , required: true},
    email : {type:String , required : true},
    password: {type:String},
    address: [{detail : {type : String }, for : {type : String}}],
    phoneNumber: [{type : Number}]


}, {
    timestamps: true
});

UserSchema.statics.findByEmailAndPhone = async({email, phoneNumber}) => {

    const checkUserByEmail = await UserModel.findOne({email});

    const checkuserByPhoneNumber = await UserModel.findOne({phoneNumber});

    if( checkuserByPhoneNumber || checkUserByEmail){

      throw new Error("User Already Exists")
    }

    return false;

}

UserSchema.methods.generatejwttoken = function(){
    return jwt.sign({user : this._id.toString()} , "Zomato App")
}

UserSchema.statics.findByEmailAndPassword = async({email, password}) => {

    const user = await UserModel.findOne({email});
    if(!user) throw new Error("User Not Found")
    const doesPasswordmatch = await bcrypt.compare(password , user.password)

    if(!doesPasswordmatch){

      throw new Error("Invalid Password")
    }

    return user;

}

UserSchema.pre("save" ,function(next){

    const user = this;

    if(!user.isModified("password")) return next();

    bcrypt.genSalt(8 , (error, salt) =>{

        if(error) return next(error);

        bcrypt.hash( user.password , salt , (error , hash)=>{

            if(error) return next(error);

            user.password = hash;
            return next();
        })
    });

})

export const UserModel = mongoose.model("Users" , UserSchema)