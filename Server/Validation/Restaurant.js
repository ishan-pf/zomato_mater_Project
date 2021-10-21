import joi from "joi";

export const ValidateRestaurantCity = (RestaurantObj) => {

    const Schema = joi.object({

        city : joi.string().required()     
    });

    return Schema.validateAsync(RestaurantObj);
}

export const ValidateRestaurantId = (restId) => {

    const Schema = joi.object({

        _id : joi.string().required()     
    });

    return Schema.validateAsync(restId);
}

export const ValidateRestaurantSearchString = (RestaurantObj) => {

    const Schema = joi.object({

        search : joi.string().required()    
    });

    return Schema.validateAsync(RestaurantObj);
}
