import joi from "joi";

export const ValidateUserId = (userId) => {

    const Schema = joi.object({

        _id : joi.string().required()     
    });

    return Schema.validateAsync(userId);
}
