//Declare const for URL
const apiURL = "https://swapi.dev/api/people"

function fetcher() {
    fetchThis(apiURL);
}

//Create Fetch
function fetchThis(url) {
    fetch(url)
        .then(response => response.json())
        .then(function (jsonObject) {
            let prevButton = document.createElement('button');

            let results = jsonObject['results'];
            for (let i = 0; i < results.length; i++) {
                let person = document.createElement('div');
                person.className = 'persons';
                let name = document.createElement('h3');

                name.textContent = results[i].name;

                person.appendChild(name);

                document.querySelector('div.starwarspeople').appendChild(person);
            }

            if (jsonObject.previous) {
                prevButton(jsonObject);
            }


            if (jsonObject.next) {
                nextButton(jsonObject);
            }

        });
}

function nextButton(jsonObject) {
    let nextPage = jsonObject['next'];
    console.log(nextPage);

    let nextButton = document.createElement('button');
    nextButton.className = 'btn-next';
    let a = document.createElement('a')

    a.setAttribute('href', nextPage);
    nextButton.setAttribute('value', 'Next');
    a.appendChild(nextButton);

    document.querySelector('div.starwarspeople').appendChild(a)
}

function prevButton(jsonObject) {
    let prevPage = jsonObject['previous'];
    console.log(prevPage);

    let prevButton = document.createElement('button');
    prevButton.className = 'btn-prev';
    let a = document.createElement('a')

    a.setAttribute('href', prevPage);
    prevButton.setAttribute('value', 'previous');
    a.appendChild(prevButton);

    document.querySelector('div.starwarspeople').appendChild(a)
}