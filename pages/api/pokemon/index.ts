import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';
//import pokenode from '../../../lib/pokenode';

/**
 *
 * @param query
 * @param variables
 * @param operationName
 * @returns
 */

async function fetchGraphQL(query, variables, operationName) {
    const result = await fetch('https://beta.pokeapi.co/graphql/v1beta', {
        method: 'POST',
        body: JSON.stringify({
            query: query,
            variables: variables,
            operationName: operationName,
        }),
    });

    return await result.json();
}

function fetchPokemon(id) {
    const query = `
        query pokemon($id: Int) {
            pokemon: pokemon_v2_pokemon(where: {id: {_eq: $id}}) {
                id
                name
                height
                weight
                base_experience
                is_default
                order
                pokemon_species_id
                pokemon_v2_pokemonsprites {
                    sprites
                }
                pokemon_v2_pokemonstats {
                    base_stat
                    stat_id
                    effort

                }
                pokemon_v2_pokemontypes {
                    pokemon_v2_type {
                        generation_id
                        name
                        id
                    }
                }
            }
        }
    `;
    return fetchGraphQL(query, { id: id }, 'pokemon');
}

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

    /** RANDOMLY CHOOSE POKEMON ***************************/
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

    //const pokemon = await pokenode.getPokemonById(random);

    // https://pokeapi.co/docs/graphql
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { errors, data } = await fetchPokemon(random);
    if (errors) {
        console.error(errors);
    }
    //console.log(JSON.stringify(data, null, 2));

    /** STAT PARSE **************************************/

    // for choosing random stat 0 - 5
    function getRandomStat(max: number) {
        let rand = Math.floor(Math.random() * max);
        return rand;
    }

    // choose one stat profile for the pokemon
    const randomStat = getRandomStat(6);
    const stats = data.pokemon[0].pokemon_v2_pokemonstats[randomStat];

    // assign the chosen stat profile to the pokemon
    data.pokemon[0].stats = stats;

    delete data.pokemon[0].pokemon_v2_pokemonstats;

    /** TYPE PARSE ***************************************/
    // rename types in data object

    data.pokemon[0].types = data.pokemon[0].pokemon_v2_pokemontypes;
    //data.pokemon[0].types = types;

    delete data.pokemon[0].pokemon_v2_pokemontypes;

    /** SPRITE PARSE **************************************/

    // parse graphql query sprite result from string format
    const spriteParse = JSON.parse(
        data.pokemon[0].pokemon_v2_pokemonsprites[0].sprites
    );

    // new create sprite json object
    const sprites = spriteParse;

    // delete other and versions objects
    sprites.other = null;
    sprites.versions = null;

    // add new sprite object property to data object
    data.pokemon[0].sprites = sprites;

    // delete old sprite string from grapql query result
    delete data.pokemon[0].pokemon_v2_pokemonsprites;

    /***RESPONSE: RETURN DATA ***************************/

    let dataObj = data.pokemon[0];

    // return altered data object
    res.status(200).json(dataObj);
}
