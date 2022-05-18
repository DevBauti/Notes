import Joi from "joi";

export const schema = Joi.object({
    title: Joi.string().max(30).min(2),
    text: Joi.string().max(250).min(2).required(true)
})

export const noteValidations = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.validateAsync(req.body)
            next()
        } catch (error) {
            res.status(401).json(error.message)
        }
    }
}