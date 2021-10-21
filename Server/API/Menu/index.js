import express from 'express';

import { MenuModel , ImageModel}  from "../../database/allmodels"
import { ValidateMenuId , ValidateMenuImageId } from "../../Validation/Menu"


const Router = express.Router()




Router.get("/list/:_id" , async (req, res) => {

    try{
        await ValidateMenuId(req.params);
    const {_id} = req.params;

    const menus = await MenuModel.findOne({_id});

    return res.json({menus});
 }
 catch{error}{
     return res.status(500).json({error : error.message})
 }
});

Router.get( "/image/:_id" , async(req, res) =>{

    try{
        await ValidateMenuImageId(req.params);
        const {_id} = req.params;

        const menus = await ImageModel.findOne({_id});

        return res,json({menus});
    }
    catch(error){
        return res.status(500).json({error : error.message})
    }
})


export default Router;