import { RestaurantModel } from "../../database/allmodels";

import express from "express";
import {ValidateRestaurantCity, ValidateRestaurantId , ValidateRestaurantSearchString} from "../../Validation/Restaurant"
const Router = express.Router();


Router.get( "/" , async(req,res) => {
 try{
     await ValidateRestaurantCity(req.query)
    const {city } = req.query;

    const restaurants = await RestaurantModel.find(city);

    return res.json({restaurants});
 }
 catch(error){
     return res.status(500).json({error : error.message})
 }
})


Router.get("/:_id" , async(req,res) => {

    try{
        await ValidateRestaurantId(req.params)
        const {_id} = req.params;

        const restaurant = await RestaurantModel.findOne(_id);

        if(!restaurant){

            res.status(404).json({error :" Restaurant Not Found"})
        }

        return res.json(restaurant);
    }catch(error){
        return res.status(500).json({error : error.message})
    }
})

Router.get("/search" , async(req,res)=>{
    try{
        await ValidateRestaurantSearchString(req.body);
    const {searchString }= req.body;

    const restaurants = await RestaurantModel.find({
        name : {$regex: searchString , $options : "i"}
    })
    return res.json({restaurants});
}catch(error){
    return res.status(500).json({error : error.messsage})
}
})

export default Router;