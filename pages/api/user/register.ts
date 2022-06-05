import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'

// POST /api/user/register
export default async function handler (req:NextApiRequest, res: NextApiResponse) {
    if(req.method != 'POST') {
        res.status(405).send({ message: `The HTTP ${req.method} method is not supported at this route.` })
    }
    const body = req.body
    const getUser = await prisma.user.findUnique({
        where: {
          email: body.email,
        },
        select: {
            email: true,
            name: true
        }
    });

    if(getUser.name) {
        res.status(200).json({ message: 'Username already registered'})
        return
    }

    if (getUser.email) {
        res.status(200).json({ message: 'Email already registered'})
        return;
    }

    // create user if email not found in database
    await prisma.user.create({
        data: {
            user: body.name,
            email: body.email        
        }
    })

    // generate salt to hash password 
    const salt = await bcrypt.genSalt(10)
    // now we set user password to hashed password
    const password = await bcrypt.hash(body.password, salt)

    // update user password
    await prisma.user.update({
        where: getUser,
        data: {
            password: password
        }
    })
    res.status(200).json({ message: 'Registered successfuly' })

}

