'use strict'

let numN;
do {
    numN = Number(prompt('Введіть ціле число N'))
} while (!Number.isInteger(numN))

let numM;
do {
    numM = Number(prompt(`Введіть ціле число M більше за ${numN}`))
} while (!Number.isInteger(numM) || numN > numM);

const boolean = confirm('Потрібно пропускати парні числа?')

let sum = 0;

// if (boolean) {
//     for (numN; numN <= numM; numN++){
//         if(numN % 2 === 1 || numN % 2 === -1){ // врахувала можливість введення від'ємних чисел
//             sum += numN
//         }
//     }
//     console.log(sum);
// } else {
//     for (numN; numN <= numM; numN++){
//         sum += numN
//     }
//     console.log(sum);
// }

//Я подумала, що буде краще спочатку перевірити boolean через if, потім запускати цикл, 
//щоб цикл кожного разу не перевіряв boolean, однак сказали, що краще щоб був один цикл. 

for (numN; numN <= numM; numN++){
    if(boolean){
        if(numN % 2 === 1 || numN % 2 === -1){ // врахувала можливість введення від'ємних чисел
            sum += numN
        }
    } else {
        sum += numN
    }
}
console.log(sum);
