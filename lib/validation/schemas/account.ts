import Joi from 'joi';

const schema = Joi.object({
    username: Joi.string().alphanum().min(5).max(20).required(),

    password: Joi.string()
        .pattern(
            new RegExp(
                '?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,16}'
            )
        )
        .required()
        .strict(),

    confirm_password: Joi.string()
        .valid(Joi.ref('password'))
        .required()
        .strict(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .lowercase()
        .required(),
    role: Joi.string().valid('Admin', 'User').required(),
});

const schemaAccount = Joi.object(schema).with('password', 'repeat_password');

export default schemaAccount;
