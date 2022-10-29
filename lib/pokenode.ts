import { PokemonClient } from 'pokenode-ts';

// created Global Pokemon Client for development enviroment
let pokenode: PokemonClient;

if (process.env.NODE_ENV === 'production') {
    pokenode = new PokemonClient();
} else {
    if (!global.pokenode) {
        global.pokenode = new PokemonClient();
    }
    pokenode = global.pokenode;
}
export default pokenode;
