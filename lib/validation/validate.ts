// https://github.com/bmvantunes/youtube-2021-march-nextjs-api-routes-validation-yup/blob/main/src/middleware/validate.ts
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { object, number, ObjectPropertiesSchema, ObjectSchema } from 'joi';

export function validate(
    schema: ObjectSchema<ObjectPropertiesSchema>,
    handler: NextApiHandler
) {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true, // remove unknown props
    };
    // const { error, value } = schema.validate(req.body, options);
    return async (req: NextApiRequest, res: NextApiResponse) => {
        if (req.method ? 'POST' : 'PUT') {
            try {
                const newSchema =
                    req.method === 'POST'
                        ? schema
                        : schema.concat(
                              object({ id: number().required().positive() })
                          );
                req.body = await newSchema.validate(req.body, options);

                res.status(200).json({ message: 'Success!' });
            } catch (e) {
                return res.status(400).json(e);
            }
            res.status(405).send({
                message: `The HTTP ${req.method} method is not supported at this route.`,
            });
        }
        await handler(req, res);
    };
}
