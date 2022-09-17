import type { NextApiRequest, NextApiResponse } from 'next'
import { Private } from '../../../lib/types/profiles/user'
import { getSession } from 'next-auth/react'

// GET /api/profiles/[id] 
export default async function handler (req:NextApiRequest, res: NextApiResponse) {
    
    // accept GET request only
    if(req.method != 'GET') {
        res.status(405).send({ message: `The HTTP ${req.method} method is not supported at this route.` })
    };

    // get user session
    const session = await getSession({ req });
    
    // select id from request
    const profileId = req.query.id

    // select user profile
    let getProfile: Private | null = await prisma.user.findUnique({
        where: {
            profile: {
                id: profileId
            }
        },
        select: {
          profile: true
        }
    })

    // if session return user profile, public and private fields
    if (session) {
        res.status(200).send(getProfile);
    }
    
    // if !session return user profile public fields only
    res.status(400);
    
}
