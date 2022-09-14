import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react';

// Protected Route
// DELETE api/user/[id] | secure route for deleting a user
export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const userId = req.query.id
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    const session = await getSession({ req });

    if (!session) {
        res.status(401).send({ message: `Unauthorized` })
    }

    if(req.method != 'DELETE') {
        res.status(405).send({ message: `The HTTP ${req.method} method is not supported at this route.` })

    }
    const userName = user.name;
    await prisma.user.delete({
        where: {
          email: user.email,
        },
    })
    res.status(200).send({ message: `${userName} is deleted`})
    
}



