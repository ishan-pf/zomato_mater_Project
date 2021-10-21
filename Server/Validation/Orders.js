import joi from "joi";

export const ValidateOrderId = (OrderId) => {

    const Schema = joi.object({

        _id : joi.string().required()     
    });

    return Schema.validateAsync(restId);
}
