import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

// Protected Route
// GET || UPDATE api/user | Secure route that returns the specified user
export default async function getUser(req: NextApiRequest, res: NextApiResponse) {

    const body = req.body
    const user = await prisma.user.findUnique({
        where: {
            email: body.email
        }
    })

    const session = await getSession({ req });

    if (!session) {
        res.status(401).send({ message: `Unauthorized` })
    }

    switch(req.method) {
        case 'GET':
            if(user) {
                return user
            }
            return;
        case 'UPDATE':
            if(body.name) {
                await prisma.user.update({
                    where: {
                        email: user.email
                    },
                    data: {
                        name: body.user,
                    },
                })
                res.status(200).json({ message: `${req.body.name} is updated`})
            } else if(body.password) {
                await prisma.user.update({
                    where: {
                        email: user.email
                    },
                    data: {
                        password: body.password,
                    },
                })
                res.status(200).json({ message: `password is updated`})
            }else if (body.email) {
                await prisma.user.update({
                    where: {
                        email: user.email
                    },
                    data: {
                        email: body.email,
                    },
                })
                res.status(200).json({ message: `${body.email} is updated`})
            } else {
                res.status(400).send({ message: "Data Not Found"})
            }
        default:
            res.status(405).send({ message: `The HTTP ${req.method} method is not supported at this route.` })

    }       
}

