import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

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

    // Exclude keys from profile:
    // https://www.prisma.io/docs/concepts/components/prisma-client/excluding-fields
    function exclude<Profile, Key extends keyof Profile>(
        profile: Profile,
        ...keys: Key[]
    ): Omit<Profile, Key> {
        for (let key of keys) {
            delete profile[key];
        }
        return profile;
    }

    // find user by id
    try {
        // select id from request
        const { id } = req.query;

        // convert user query to string format
        const profileId = id.toString();

        // select user profile
        const getProfile = await prisma.profile.findUnique({
            where: {
                id: profileId,
            },
        });

        // Filter profile fields from http response
        const profileFiltered = exclude(getProfile, 'updatedAt');
        // return user profile
        if (profileFiltered) {
            res.status(200).json(profileFiltered);
        }
    } catch (e) {
        res.status(404).send({ message: 'User Error' });
    }
}
