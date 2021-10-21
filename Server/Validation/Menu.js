import joi from "joi";

export const ValidateMenuId = (restId) => {

    const Schema = joi.object({

        _id : joi.string().required()     
    });

    return Schema.validateAsync(restId);
}

export const ValidateMenuImageId = (restId) => {

    const Schema = joi.object({

        _id : joi.string().required()     
    });

    return Schema.validateAsync(restId);
}
