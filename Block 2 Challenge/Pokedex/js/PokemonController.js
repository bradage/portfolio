import Pokemon from './Pokemon';
import PokemonView from './PokemonView.js';

// Quake controller
export default class PokemonController {
    constructor(parent, name) {
        this.parent = parent;
        this.parentElement = null;
        this.name = name
        this.pokemon = new Pokemon();
        this.pokemonView = new PokemonView();
    }
}