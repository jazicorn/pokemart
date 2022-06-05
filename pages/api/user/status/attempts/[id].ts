// TODO
// 1. Endpoint : ONE user status attempts session;
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({req});
    if (!session) {
        res.status(401).send({ message: `Unauthorized` })
    }
    let body = req.body;
    res.status(200).json({ message: 'Endpoint: attemps[id]'})
}

