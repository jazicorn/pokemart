import type { NextApiRequest, NextApiResponse } from 'next';
import pokenode from '../../../lib/pokenode';

// Public Route
// GET /api/pokemon | Randomly generated pokemon endpoint
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method != 'GET') {
        res.status(405).send({
            message: `The HTTP ${req.method} method is not supported at this route.`,
        });
    }

    // random generator
    function getRandomInt(max: number) {
        let rand = Math.floor(Math.random() * max);
        if (rand == 0) {
            rand++;
            return rand;
        } else {
            return rand;
        }
    }

    // 151 Pokemon Total | Generation 1 Pokedex
    let random = getRandomInt(152);

    const pokemon = await pokenode.getPokemonById(random);

    res.status(200).json(pokemon);
}
