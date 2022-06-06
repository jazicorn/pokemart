import Joi from "joi";

const JoiDate = require('joi')
    .extend(require('@joi/date'));


const schema = Joi.object({
    firstname: Joi.string()
        .alphanum()
        .min(2)
        .max(20),

    lastname: Joi.string()
        .alphanum()
        .min(2)
        .max(20),


    birth_date: JoiDate.date()
        .format('YYY-MM-DD')
        .utc(),

})

const schemaProfile = Joi.object(schema).with('password', 'repeat_password');

export default schemaProfile
