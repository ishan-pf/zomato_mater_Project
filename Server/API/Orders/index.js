import express from "express"
import passport from "passport"
import {OrderModel} from "../../database/allmodels";

import { ValidateUserId } from "../../Validation/User"

const Router = express.Router();


Router.get("/:_id" ,passport.authenticate("jwt" , {session : false}) , async(req, res) =>{

    try{
        await ValidateUserId(req.params);
        const {_id} = req.params;

        const getOrders = await OrderModel.fndOne({user : _id})

        if(!getOrders){
            return res.status(404).json({error : "No Orders Found"})
        }
    }catch(error){
        return res.status(500).json({error : error.message})
    }
})


Router.post("/new/:_id", async(req , res) =>{
    try{
        await ValidateUserId(req.params);
        
        const { _id } = req.params;
        
        const { orderDetails } = req.body;

        const addNewOrder = await OrderModel.findOneAndUpdate(
            {
                user : _id
            },
            {
                $push : {orderDetails : orderDetails}
            },
            {
                new : true
            }
        );
        
        return res.json({ order : addNewOrder });
    }catch(error){
        return res.status(500).json({error : error.message})
    }
})


export default Router;