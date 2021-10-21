import joi from "joi";

export const ValidateRestaurantId = (restId) => {

    const Schema = joi.object({

        _id : joi.string().required()     
    });

    return Schema.validateAsync(restId);
}

export const ValidateCategory = (category) => {
    
    const Schema = joi.object({
        category : joi.string().required()
    });

    return Schema.validateAsync(category)
}

