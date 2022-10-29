// Generate random pokemon from pokemon api
import type { GetStaticProps } from 'next';
import { InferGetStaticPropsType } from 'next';
import { PokemonClient } from 'pokenode-ts';
const pokedex = new PokemonClient();

// Get staticsideprops for profile data
export const pokemonData = await pokedex.getPokemonByName('luxray');

export default function Welcome() {
    console.log(pokemonData);
    return (
        <div className="grow flex flex-col justify-between items-stretch bg-slate-100">
            <div className="basis-1/6 flex flex-row justify-center content-center bg-green-100">
                <div className="flex flex-col justify-center content-center bg-pink-300 ">
                    <h1 className="justify-center content-center bg-purple-100">
                        Pokemon Generator
                    </h1>
                </div>
            </div>
            <div className=" basis-4/6 grow flex lg:flex-row sm:flex-col flex-wrap justify-center content-center bg-pink-100">
                <div className="w-1/2 bg-purple-400">Pokemon:</div>
            </div>
            <div className="basis-1/6 bg-green-100">
                <div></div>
            </div>
        </div>
    );
}