import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

// Public Route
// GET /api/profiles | Route that returns all users.
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method != 'GET') {
        res.status(405).send({
            message: `The HTTP ${req.method} method is not supported at this route.`,
        });
    }

    // TODO | select return only the values you want public users to see
    const profiles = await prisma.profile.findMany({
        select: {
            name_first: true,
            name_last: true,
            image: true,
            bio: true,
            handles: true,
            createdAt: true,
            userName: true,
        },
    });

    res.status(200).json(profiles);
}
