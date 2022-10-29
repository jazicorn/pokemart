# PokeAPI
> All the Pokémon data you'll ever need in one place, easily accessible through a modern RESTful API.

- https://pokeapi.co/

## Information
This is a **consumption-only** API — only the HTTP GET method is available on resources.

No authentication is required to access this API, and all resources are fully open and available. Since the move to static hosting in November 2018, rate limiting has been removed entirely, but we still encourage you to limit the frequency of requests to limit our hosting costs.

## Fair Use Policy
PokéAPI is free and open to use. It is also very popular. Because of this, we ask every developer to abide by our fair use policy. People not complying with the fair use policy will have their IP address permanently banned.

PokéAPI is primarily an educational tool, and we will not tolerate denial of service attacks preventing people from learning.

**Rules:**
    - Locally cache resources whenever you request them.
    - Be nice and friendly to your fellow PokéAPI developers.

## [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Main_Page)
> Bulbapedia is an encyclopedia about Pokémon to which anyone can contribute.

PokeAPI uses information from Bulbapedia for pokemon information.

You can get List of all pokemon avaiable from: (PokeAPI might not have completely updated list)
- [Pokedex List](https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_National_Pok%C3%A9dex_number)

---

## Pokenode-ts (Wrapper Library)
- [Github](https://github.com/Gabb-c/pokenode-ts)
- [Documentation](https://pokenode-ts-docs-gabb-c.vercel.app/)

### Installation
```bash
npm i pokenode-ts
# or
yarn add pokenode-ts # Recommended
```

### Examples

**Request Pokemon By Name:**
```javascript
import { PokemonClient } from "pokenode-ts";

(async () => {
  const api = new PokemonClient();

  await api
    .getPokemonByName("luxray")
    .then((data) => console.log(data.name)) // will output "Luxray"
    .catch((error) => console.error(error));
})();


```
```javascript
// single await request
import { PokemonClient } from "pokenode-ts";

const pokemonData = await pokedex.getPokemonByName('luxray');
```

**Pokemon Object:**
```json
{
  abilities: [
    { ability: [Object], is_hidden: false, slot: 1 },
    { ability: [Object], is_hidden: false, slot: 2 },
    { ability: [Object], is_hidden: true, slot: 3 }
  ],
  base_experience: 262,
  forms: [
    {
      name: 'luxray',
      url: 'https://pokeapi.co/api/v2/pokemon-form/405/'
    }
  ],
  game_indices: [
    { game_index: 405, version: [Object] },
    { game_index: 405, version: [Object] },
    { game_index: 405, version: [Object] },
  ],
  height: 14,
  held_items: [],
  id: 405,
  is_default: true,
  location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/405/encounters',
  moves: [
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
  ],
  name: 'luxray',
  order: 536,
  past_types: [],
  species: {
    name: 'luxray',
    url: 'https://pokeapi.co/api/v2/pokemon-species/405/'
  },
  sprites: {
    back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/405.png',
    back_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/405.png',
    back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/405.png',
    back_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/405.png',
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png',
    front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/405.png',
    front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/405.png',
    front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/405.png',
    other: {
      dream_world: [Object],
      home: [Object],
      'official-artwork': [Object]
    },
    versions: {
      'generation-i': [Object],
      'generation-ii': [Object],
      'generation-iii': [Object],
      'generation-iv': [Object],
      'generation-v': [Object],
      'generation-vi': [Object],
      'generation-vii': [Object],
      'generation-viii': [Object]
    }
  },
  stats: [
    { base_stat: 80, effort: 0, stat: [Object] },
    { base_stat: 120, effort: 3, stat: [Object] },
    { base_stat: 79, effort: 0, stat: [Object] },
    { base_stat: 95, effort: 0, stat: [Object] },
    { base_stat: 79, effort: 0, stat: [Object] },
    { base_stat: 70, effort: 0, stat: [Object] }
  ],
  types: [ { slot: 1, type: [Object] } ],
  weight: 420
}
```
