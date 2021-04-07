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
        for(p in pokemons){
        renderPokemon(p);
        }
    });
};

function renderPokemon(pokemon){
    //Create the html elements
    //wrapper section
    let card = document.createElement('section');
    card.className = 'card'

    //name div
    let name =document.createElement('div');
    name.className = 'name'
    let h3Name = document.createElement('h3');
    
    //hitpoints div
    let hp = document.createElement('div');
    hp.className = 'div'

    //img div
    let img = document.createElement('div');
    img.className = 'img'

    //info div
    let info = document.createElement('div');
    info.className = 'info'

    // ability div
    let ability  = document.createElement('div');
    ability.className = 'ability'

    //Assign data to html elements
    h3Name.textContent = pokemon.name;
    img.setAttribute('src', pokemon.image);
    img.setAttribute('alt', pokemon.name);
    img.setAttribute('title', pokemon.name);



    //put it all together
    card.appendChild(name);
    name.appendChild(h3Name);
    card.appendChild(hp);
    card.appendChild(img);
    card.appendChild(info);
    card.appendChild(ability);
    
    //append to document
    document.getElementById('pokemonList').appendChild(card);
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