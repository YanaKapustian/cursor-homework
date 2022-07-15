import './styles/style.scss';
import { newFontGenerator } from './functions/15-hw.js';
import 'bootstrap';
import catImg from './functions/614497.jpg';
import { getRandomChinese } from './functions/13-hw'
import { generateBlocks } from './functions/11-hw/main'
import './functions/11-hw/style.css'
import { Student } from './functions/10-hw';
import { ukraine, getMyTaxes } from './functions/09-hw';
import { students, getSubjects } from './functions/08-hw';
import { replaceBadWords } from './functions/07-hw';
import { students as studentsArray, getPairs } from './functions/05-hw';
import { nameFormation } from './functions/04-hw';
import { SUM_FLOOR } from './functions/01-hw';

const text = document.querySelector('p')
const btnUp = document.querySelector('#up')
const btnDown = document.querySelector('#down')
const imgContainer = document.querySelector('.img')

let fz = newFontGenerator(20);
text.style.fontSize = fz.next().value + 'px';

btnUp.addEventListener('click', () => {
    text.style.fontSize = fz.next('up').value + 'px';
})

btnDown.addEventListener('click', () => {
    text.style.fontSize = fz.next('down').value + 'px';
})

const newImg = document.createElement('img');
newImg.setAttribute('src', catImg)
imgContainer.append(newImg);

getRandomChinese(4)

generateBlocks();

const yana = new Student('Полтавська політехніка', 1, 'Капустян Яна')

console.log("hw 10: ", yana.getInfo());

console.log("hw 9: ", getMyTaxes.call(ukraine, 2000));

console.log("hw 8:", getSubjects(students[0]));

console.log("hw 7: ", replaceBadWords('holyshit!'));

console.log("hw 5: ", getPairs(studentsArray));

console.log("hw 4: ", nameFormation('yaNa'));

console.log("hw 1: ", SUM_FLOOR);
