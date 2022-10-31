// next/image wasnt working properly so I had to use <img/>
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/**Tip: You CANNOT pass props (request data) directly from components, MUST pass props throgh NextPage */
/**
 *
 * Example Pokemon Object
 * {
 * "id":137,
 * "name":"porygon",
 * "height":8,
 * "weight":365,
 * "base_experience":79,
 * "is_default":true,
 * "order":225,
 * "pokemon_species_id":137,
 * "stats":{"base_stat":65,"stat_id":1,"effort":0},
 * "types":[
 *      "0" : {
 *          "pokemon_v2_type":{
 *              "generation_id":1,
 *              "name":"normal",
 *              "id":1
 *          }
 *      }
 * ],
 * "sprites":{
 *      "front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
 *      "front_female":null,
 *      "front_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/137.png",
 *      "front_shiny_female":null,
 *      "back_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/137.png",
 *      "back_female":null,
 *      "back_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/137.png",
 *      "back_shiny_female":null,"other":null,"versions":null}
 * }
 */

// Generate random pokemon from pokemon api
const Generator = (pokeObj) => {
    let sprite = pokeObj.pokemon.sprites.front_default;
    return (
        <div className="basis-1/3 bg-indigo-300 h-full flex flex-col justify-start content-center ">
            <h1 className="bg-teal-200 basis-5">Random Generator</h1>
            <div className="bg-red-200">{pokeObj.pokemon.name}</div>
            <img src={sprite}></img>
        </div>
    );
};

export default Generator;
