import type { NextApiRequest, NextApiResponse } from 'next'
import { validate } from '../../lib/validation/validate'
import schema from '../../lib/validation/schemas/account'
import bcrypt from 'bcryptjs'

// POST /api/user/register
export default async function handler (req:NextApiRequest, res: NextApiResponse) {
    
    if(req.method != 'POST') {
        res.status(405).send({ message: `The HTTP ${req.method} method is not supported at this route.` })
    };

    // request data
    const body = req.body;

    // Eror if user already found
    try {      
        const user = await prisma.user.findUnique({
            where: {
            email: body.email,
            },
            select: {
                email: true,
                name: true
            }
        });
        if(user.name) {
            res.status(200).json({ message: 'Username already registered'})
            return
        };
        if (user.email) {
            res.status(200).json({ message: 'Email already registered'})
        };
    } catch (err) {
        res.status(400).send(err)
    }

    // validate user data before creating new user and hashing password
    try {
        validate (schema, body)
    } catch(err) {
        res.status(400).json({ message: 'Invalid Data' })
    }

    // create new user with username, email, and password
    try{
        // create user if email not found in database
        await prisma.user.create({
            data: {
                user: body.name,
                email: body.email        
            }
        });

        // generate salt to hash password 
        const salt = await bcrypt.genSalt(10);
        // now we set user password to hashed password
        const password = await bcrypt.hash(body.password, salt);

        // update user password
        await prisma.user.update({
            where: body.email,
            data: {
                password: password
            }
        });

        res.status(200).json({ message: 'Registered successfuly' }); 
    } catch(err) {
       res.status(400).json(err)
    }
    
}


