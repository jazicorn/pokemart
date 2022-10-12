import type { NextApiRequest, NextApiResponse } from 'next';

// Catch all API res for unknown/invalid endpoints
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // select id from request
    const { param } = req.query;

    res.status(404).send({
        message: `HTTP Request: '${param}' not found`,
    });
}
