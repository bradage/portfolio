import {
    getJSON
} from './utility.js';
// Quake Model
export default class Pokemon {
    constructor() {
        this.baseUrl =
            'https://pokeapi.co/api/v2/';
        // store the last batch of retrieved quakes in the model.  I don't always do this...in this case the api doesn't have an endpoint to request one quake.
        this._pokemon = [];
    }
    async getPokemonByName(name) {
        this._pokemon = await getJSON(
            this.baseUrl +
            `pokemon/${name}`
        );
        console.log(this._pokemon)
        //return this._quakes;
    }
    // getQuakeById(id) {
    //     return this._quakes.features.filter(item => item.id === id)[0];
    // }
}


let searchString = document.getElementById('searchItem');
let byName = document.getElementById('byName');

byName.addEventListener('click', getPokemonByName(searchString));


// name
// Form
// habitat
// shapes
// species
// type
// stat