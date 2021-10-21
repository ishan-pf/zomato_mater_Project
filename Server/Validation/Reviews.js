import joi from "joi"

export const ValidateReviewData = (ReviewData) =>{

    const Schema = joi.object({

        rating : joi.string().required().max(5).min(1),
        reviewText : joi.string().min(10),
        });

        return Schema.validateAsync(ReviewData);
}
