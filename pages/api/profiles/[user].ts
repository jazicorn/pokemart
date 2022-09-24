import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';
import { Public } from '../../../lib/models/profiles/user';

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

    // select user profile
    const getProfile: Readonly<Public> = await prisma.user.findUnique({
        where: {
            name: userName,
        },
        select: {
            profile: true,
        },
    });
    if (getProfile == null) {
        res.status(404).send({
            message: `Not Found.`,
        });
    }

    // if !session return user profile public fields only
    res.status(200).json(getProfile);
}
