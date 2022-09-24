/**
 * Example of using JOI
 * import DateExtension from '@joi/date';
 * import * as JoiImport from 'joi';
 * const JoiDate = JoiImport.extend(DateExtension);
 */

import * as Joi from 'joi';
import DateExtension from '@joi/date';

const JoiDate = Joi.extend(DateExtension);

const schema = Joi.object({
    firstname: Joi.string().alphanum().min(2).max(20),

    lastname: Joi.string().alphanum().min(2).max(20),

    birth_date: JoiDate.date().format('YYY-MM-DD').utc(),
});

const schemaProfile = Joi.object(schema).with('password', 'repeat_password');

export default schemaProfile;
