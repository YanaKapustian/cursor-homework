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
    showPlanets()
})

btnNext.addEventListener('click', function() {
    if (counter > 5) return;
    showPlanets()
})

async function showPlanets() {
    content.innerHTML = '';
    btnNext.classList.remove('hidden')
    if (!bool) {
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
    } else {
        const page1 = await fetch(`${BASE_URL}/planets/?format=wookiee&page=${counter}`)
        .then(response => response.text())
        .then(response => JSON.parse(response.replaceAll(`whhuanan`, `"whhuanan"`)))
        const page2 = await fetch(`${BASE_URL}/planets/?format=wookiee&page=${counter + 1}`)
        .then(response => response.text())
        .then(response => JSON.parse(response.replaceAll(`whhuanan`, `"whhuanan"`)))
        let arr1 = page1.rcwochuanaoc;
        let arrOfNames1 = arr1.map(obj => obj.whrascwo)
        let arr2 = page2.rcwochuanaoc;
        let arrOfNames2 = arr2.map(obj => obj.whrascwo)
        const ul = document.createElement('ul');
        content.append(ul)
        for (let i = 0; i < arrOfNames1.length + arrOfNames2.length; i++) {
            ul.insertAdjacentHTML('beforeend', `
                <li>${i < arrOfNames1.length ? arrOfNames1[i] :  arrOfNames1[i - 10]}</li>
            `)
        }
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

btnTranslate.addEventListener('click', translateIntoWookiee);

function translateIntoWookiee() {
    bool = true;
    wookiee_lang = '?format=wookiee';
    content.innerHTML = '';
    btnTranslate.classList.add('hidden');
    btnStopTranslate.classList.remove('hidden');
    page.classList.add('hidden');
}

btnStopTranslate.addEventListener("click", stopTranslating);

function stopTranslating() {
  bool = false;
  wookiee_lang = '';
  content.innerHTML = "";
  btnTranslate.classList.remove("hidden");
  btnStopTranslate.classList.add("hidden");
  page.classList.add('hidden');
}