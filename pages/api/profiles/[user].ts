import type { NextApiRequest, NextApiResponse } from 'next';
import { Profile } from '../../../lib/interfaces';
import prisma from '../../../lib/prisma';

// GET api/profiles/[user]
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // accept GET request only
    if (req.method != 'GET') {
        res.status(405).send({
            message: `The HTTP ${req.method} method is not supported at this route.`,
        });
    }

    // select id from request
    const userName = req.query.name;

    if (typeof userName === 'string') {
        // select user profile
        const getProfile: Profile = await prisma.profile.findUnique({
            where: {
                userId: userName,
            },
        });
        // return user profile
        res.status(200).json(getProfile);
    }

    res.status(404).send({ message: `Not Found.` });
}
