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
            weight: data.weight,
            image: data.sprites['front_default'],
            type: data.types.map((type) => type.type.name).join(', '),
            hp: data.stats[0].base_stat
        }));
        //console.log(pokemons);
        pokemons.forEach(p => {renderPokemon(p)})
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
    hp.className = 'hp'
    let h4Hp = document.createElement('h4');

    //img div
    let imgDiv = document.createElement('div');
    imgDiv.className = 'img-div'
    img = document.createElement('img');

    //info div
    let info = document.createElement('div');
    info.className = 'info'
    let pInfo = document.createElement('p');

    // ability div
    let ability  = document.createElement('div');
    ability.className = 'ability'

    //Assign data to html elements
    h3Name.textContent = pokemon.name;
    h4Hp.textContent = pokemon.hp;
    img.setAttribute('src', pokemon.image);
    img.setAttribute('alt', pokemon.name);
    img.setAttribute('title', pokemon.name);
    pInfo.textContent = 'No. ' + pokemon.id + ' type: ' + pokemon.type + ' HT: ' + pokemon.height + '" WT: ' + pokemon.weight + ' lbs.';

    //put it all together
    card.appendChild(name);
    name.appendChild(h3Name);
    card.appendChild(hp);
    hp.appendChild(h4Hp);
    card.appendChild(imgDiv);
    imgDiv.appendChild(img);
    card.appendChild(info);
    info.appendChild(pInfo);
    card.appendChild(ability);
    
    //append to document
    document.getElementById('pokemonList').appendChild(card);
}

// getPokemon();


const byNameBtn = document.getElementById('byName');
console.log(byNameBtn);

byNameBtn.addEventListener('click', function() {
    searchTerm = document.getElementById('searchItem').value;
    const promises = [];
        url = baseUrl + 'pokemon/' + searchTerm;
        console.log(url);
        promises.push(fetch(url).then((results) => results.json()));

    Promise.all(promises).then((results) => {
        const pokemons = results.map((data) => ({
            name: data.name,
            id: data.id,
            height: data.height,
            weight: data.weight,
            image: data.sprites['front_default'],
            type: data.types.map((type) => type.type.name).join(', '),
            hp: data.stats[0].base_stat
        }));
        //console.log(pokemons);
        pokemons.forEach(p => {renderPokemon(p)})
    });
}, false);


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