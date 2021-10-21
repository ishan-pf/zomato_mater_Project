import express from 'express';

// import UserModel from '../../database/allmodels'
import passport from 'passport';
import { UserModel } from '../../database/allmodels';
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
import { ValidateSignup , ValidateSignin} from "../../Validation/auth"
const Router = express.Router();


Router.post( "/signup" , async( req,res ) => {
    try{

        await ValidateSignup(req.body.credentials);
  
        await UserModel.findByEmailAndPhone(req.body.credentials);

    const newUser = await UserModel.create(req.body.credentials )
 
    const token = newUser.generatejwttoken();

    return res.status(200).json({token})

}
catch(error){

   return  res.status(500).json({error : error.message })
}
});

Router.post( "/signin" , async( req,res ) => {
    try{
        await ValidateSignin(req.body.credentials);
        const user = await UserModel.findByEmailAndPassword(req.body.credentials);
 
    const token = user.generatejwttoken();

    return res.status(200).json({token , status : "success"})

}
catch(error){

   return  res.status(500).json({error : error.message })
}
});


Router.get("/google" , passport.authenticate("google" ,{
    scope : [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"
]
}));

Router.get("/google/callback" , passport.authenticate("google" , {failureRedirect : "/"}),

(req,res) =>{ return res.json({token : req.session.passport.user.token})
}
)

export default Router;
