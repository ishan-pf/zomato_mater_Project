
require('dotenv').config() ;
import express from 'express';
import helmet from 'helmet';
import Auth from './API/Auth/index';
import cors from 'cors';
 import passport from 'passport';
import connectDB from './database/Connection';
 import googleAuthConfig from './Config/Google.Config'
 import routeAuthConfig from './Config/Route.Config'
import Restaurant from './API/Restaurant'
import Food from './API/Food'
import Menu from './API/Menu'
import Image from "./API/Image";
import Order from "./API/orders";
import Reviews from "./API/Reviews";
const zomato = express();

zomato.use(express.json());

zomato.use(express.urlencoded({extended: false}));

zomato.use(helmet());

zomato.use(cors());

zomato.use(passport.initialize());
zomato.use(passport.session());
googleAuthConfig(passport);
routeAuthConfig(passport)
zomato.use("/auth" , Auth)
zomato.use("/restaurant" , Restaurant)
zomato.use("/food" , Food)
zomato.use("/menu" , Menu)
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/reviews", Reviews);

  zomato.get( "/" , (req , res) => {

    console.log("Welcome to the Zomato Master Project Backend!!!")

    return res.json({message : "Oh yeah!!!"})
  } )


  zomato.listen ( 5000, (req,res) => {
    connectDB().then( () => console.log("The Database is Connected"))
    .catch( () => console.log("DataBase Connection Failed"))
    console.log("Server Up and Running");
  })