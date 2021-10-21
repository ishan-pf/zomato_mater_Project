import joi from "joi"

export const ValidateSignup = (userData) =>{

    const Schema = joi.object({

        fullname : joi.string().required().min(5).messages({'string.min' : 'Name should have a minimum length of {#limit}'}),
        email : joi.string().email().required().messages({'string.email' : 'Enter a Valid Email'}),
        password : joi.string().min(8).required().messages({'string.email' : 'Password should contain minimum length of {#limit}'}),
        address : joi.array().items(joi.object({detail : joi.string(), for : joi.string()})),
        phoneNumber: joi.number().required()
        });

        return Schema.validateAsync(userData);
}


export const ValidateSignin = (userData) =>{

    const Schema = joi.object({

        email : joi.string().email().required(),
        password : joi.string().min(5).required()
        
        });

        return Schema.validateAsync(userData);
}