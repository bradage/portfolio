// import PokemonController from './PokemonController.js';

// const myPokemonController = new PokemonController('#pokemonList');
// myPokemonController.init();

const baseUrl = 'https://pokeapi.co/api/v2/';



searchTerm = document.getElementById('searchItem').value;
// console.log(searchTerm);
// btn = document.getElementById('byName');

// btn.addEventListener('click', searchByName());


// function getJSON(url) {
//     return fetch(url)
//         .then(function (response) {
//             if (!response.ok) {
//                 throw Error(response.statusText);
//             } else {
//                 return response.json();
//             }
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }

function searchByName(name = searchTerm) {
    // function getJSON(url) {
    return fetch(baseUrl + `pokemon/${name}`)
        .then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                console.log(response.json());
                return response.json();
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}