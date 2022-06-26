const BASE_URL = 'https://swapi.dev/api/'
const btnFilm = document.querySelector('.btn-input')
const input = document.querySelector('#film-input')
const content = document.querySelector('.content')
const btnShow = document.querySelector('.btn-show')
const btnNext = document.querySelector('.btn-next')
const page = document.querySelector('.page')
const pageCounter = document.querySelector('.page-counter')
const btnTranslate = document.querySelector('.btn-translate')
const btnStopTranslate = document.querySelector('.btn-stop-translate')

let array = []
let counter = 1;
let wookiee_lang = '';
let bool = false;
let arrOfPlanet = [];

btnFilm.addEventListener('click', async function() {
    if (!input.value) return;
    const num = input.value;
    await getArrayOfPeople(num);
    createCards();
})

async function getArrayOfPeople(num) {
    const request = await fetch (`${BASE_URL}films/${num}`)
    const data = await request.json();
    array = data.characters;
}

async function createCards() {
    let regexp = /[0-9]/g;
    content.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        let id = array[i].match(regexp).join('')
        const request = await fetch (`${BASE_URL}people/${id}/${wookiee_lang}`)
        const person = await request.json();
        content.insertAdjacentHTML('beforeend', `
            <div class="card">
                <img class="img" src="https://starwars-visualguide.com/assets/img/characters/${id}.jpg">
                <div class="info">
                    <p>${bool ? 'whrascwo' : 'Name'}: <span class="name">${person.name || person.whrascwo}</span></p>
                    <p>${bool ? 'rhahrcaoac_roworarc' : 'Birth Year'}: <span class="birth-year">${person.birth_year || person.rhahrcaoac_roworarc}</span></p>
                    <p>${bool ? 'rrwowhwaworc' : 'Gender'}: <span class="gender">${person.gender || person.rrwowhwaworc}</span></p>
                </div>
            </div>
        `)
    }
}

btnShow.addEventListener('click', function() {
    counter = 1;
    bool ? showPlanetsWookiee() : showPlanets()
})

btnNext.addEventListener('click', function() {
    bool ? showPlanetsWookiee() : showPlanets()
})

async function showPlanets() {
    
    content.innerHTML = '';
    btnNext.classList.remove('hidden')
    const request1 = await fetch(`${BASE_URL}/planets/?page=${counter}`)
    const request2 = await fetch(`${BASE_URL}/planets/?page=${counter + 1}`)
    const page1 = await request1.json()
    const page2 = await request2.json()
    const ul = document.createElement('ul');
    content.append(ul)
    for (let i = 0; i < page1.results.length + page2.results.length; i++) {
        ul.insertAdjacentHTML('beforeend', `
            <li>${i < page1.results.length ? page1.results[i].name : page2.results[i - 10].name}</li>
        `)
    }
    await countPages();
    counter += 2;
}

getPlanetsWookiee()

async function getPlanetsWookiee() {
    for (let i = 1; i <= 60; i++) {
        const request = await fetch(`${BASE_URL}/planets/${i}?format=wookiee`)
        const planetWookiee = await request.json()
        arrOfPlanet.push(planetWookiee.whrascwo)
    }
}

async function showPlanetsWookiee() {
    content.innerHTML = '';
    btnNext.classList.remove('hidden')
    const ul = document.createElement('ul');
    content.append(ul)
    let index;
    switch(counter) {
        case 1: 
            index = 0;
            break;
        case 3: 
            index = 20;
            break;
        case 5: 
            index = 40;
            break;    
    }
    console.log(counter);
    let until = index + 20;
    for (index; index < until; index++) {
        ul.insertAdjacentHTML('beforeend', `
            <li>${arrOfPlanet[index]}</li>
        `)
    }
    await countPages();
    counter += 2;
}


function countPages() {
    page.classList.remove('hidden')
    switch(counter) {
        case 1: 
            pageCounter.innerText = '1';
            break;
        case 3: 
            pageCounter.innerText = '2';
            break;
        case 5: 
            pageCounter.innerText = '3';
            break;    
    }
}

btnTranslate.addEventListener('click', translateIntoWookiee)

function translateIntoWookiee() {
    wookiee_lang = '?format=wookiee'
    bool = true;
    content.innerHTML = '';
    btnTranslate.classList.add('hidden')
    btnStopTranslate.classList.remove('hidden')
    page.classList.add('hidden')
}

btnStopTranslate.addEventListener("click", stopTranslating);

function stopTranslating() {
  wookiee_lang = "";
  bool = false;
  content.innerHTML = "";
  btnTranslate.classList.remove("hidden");
  btnStopTranslate.classList.add("hidden");
}






























// async function getData() {
//     translateIntoWookiee()
//     const request = await fetch(`${BASE_URL}/people/2/${wookiee_lang}`)
//     const ans = await request.json()
//     console.log(ans);
// }
// async function getData2() {
//     const request = await fetch(`${BASE_URL}/planets/2/`)
//     const ans = await request.json()
//     console.log(ans);
// }

// getData()
// getData2()