require("dotenv").config()
import googleOAuth from "passport-google-oauth20"
import passport from 'passport';
import {UserModel} from "../database/allmodels"

const GoogleStrategy = googleOAuth.Strategy

export default (passport) =>{
    passport.use(
        new GoogleStrategy({
            clientID : process.env.GOOGLE_CLIENT_ID, 
            clientSecret : process.env.GOOGLE_CLIENT_SECRET, 
            callbackURL : "http://localhost:5000/auth/google/callback"

         },

         async( accessToken , refreshToken, profile , done) =>{

            const newUser = {
                fullname : profile.displayName,
                email : profile.emails[0].value,
                photoPic : profile.photos[0].value
            }
         
         try{

            const user = await UserModel.findOne({email : newUser.email})
           
            if(user){

                const token = user.generatejwttoken();
                done(null , {user, token});
            }
            else{
                const user = await UserModel.create(newUser)  
                const token = user.generatejwttoken();
               done(error , {user, token});
            }
         }catch(error){
            done(error , null)
          
         }
        }
    )
  );

  passport.serializeUser((userData , done ) =>  done(null , {...userData}))

  passport.deserializeUser((id , done ) => {
    User.findById(id, (err, user) => {

        done(err, user);
      });
  }
  
  
  );
}