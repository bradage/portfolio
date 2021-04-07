// import PokemonController from './PokemonController.js';

// const myPokemonController = new PokemonController('#pokemonList');
// myPokemonController.init();

const baseUrl = 'https://pokeapi.co/api/v2/';
const getPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 50; i++) {
        url = baseUrl + `pokemon/${i}`;
        promises.push(fetch(url).then((results) => results.json()));
    }

    Promise.all(promises).then((results) => {
        const pokemons = results.map((data) => ({
            name: data.name,
            id: data.id,
            height: data.height,
            wieght: data.wieght,
            image: data.sprites['fron_default'],
            type: data.types.map((type) => type.type.name).join(', ')
        }));
        renderPokemon(pokemons);
    });
};

const renderPokemon = (pokemon) => {

}

getPokemon();


// searchTerm = document.getElementById('searchItem').value;
// // console.log(searchTerm);
// // btn = document.getElementById('byName');

// // btn.addEventListener('click', searchByName());


// // function getJSON(url) {
// //     return fetch(url)
// //         .then(function (response) {
// //             if (!response.ok) {
// //                 throw Error(response.statusText);
// //             } else {
// //                 return response.json();
// //             }
// //         })
// //         .catch(function (error) {
// //             console.log(error);
// //         });
// // }

// function searchByName(name = searchTerm) {
//     // function getJSON(url) {
//     return fetch(baseUrl + `pokemon/${name}`)
//         .then(function (response) {
//             if (!response.ok) {
//                 throw Error(response.statusText);
//             } else {
//                 console.log(response.json());
//                 return response.json();
//             }
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }