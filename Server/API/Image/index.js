import express from 'express';
import AWS from "aws-sdk";
import multer from "multer";

import {ImageModel} from "../../database/allmodels"

import {s3Upload}  from "../../Utils/AWS/S3"

const Router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({storage});

//AWS S3 bucket config


/*
Route            /
Des              Uploading given image to S3 bucket , and then saving the file to mongodb
Params           None
Access           Public
Method           GET
*/

Router.post( "/" , upload.single("file") , async(req, res)=>{

    try{
        const file = req.file;

        const bucketOptions={
            Bucket : "zomatomaster09",
            Key: file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL : "public-read"

        }

        const uploadImage = await s3Upload( bucketOptions);

        return res.json({uploadImage});

    }catch(error){
        return res.status(500).json({error : error.message});
    }
});


export default Router;