//Declare const for URL
const apiURL = "https://swapi.dev/api/people"

// fetch('https://swapi.dev/api/people', {
//         headers: {
//             "Access-Control-Allow-Origin": '*'
//         }
//     })
//     .then(res => console.log(res))


// fetch(apiURL)
//     .then(function (response) {
//         if (!response.ok) {
//             throw Error(response.statusText);
//         } else {
//             return response.json();
//         }
//     })
//     .catch(function (error) {
//         console.log(error);
//     });
//Create Fetch
fetch(apiURL)
    .then(response => response.json())
    .then(function (jsonObject) {
        const results = jsonObject['results'];
        for (let i = 0; i < results.length; i++) {
            let person = document.createElement('div');
            person.className = 'persons';
            let name = document.createElement('h3');

            name.textContent = results[i].name;

            person.appendChild(name);

            document.querySelector('div.starwarspeople').appendChild(person);
        }
    });