import type { NextApiRequest, NextApiResponse } from 'next'

// Public Route
// GET /api/profiles/[id] | Route that returns one user.
export default async function handler (req:NextApiRequest, res: NextApiResponse) {
    
    if(req.method != 'GET') {
        res.status(405).send({ message: `The HTTP ${req.method} method is not supported at this route.` })
    };

    const userId = req.query.id
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    return user;
    
}
