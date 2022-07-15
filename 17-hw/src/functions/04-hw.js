//1. Створити функцію getMaxDigit(number), яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.

function getMaxDigit(number) {
    const arr = number.toString().split('');
    let biggest = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (biggest < arr[i]){
            biggest = arr[i]
        }
    }
    return +biggest;
}

//2. Створити функцію, яка визначає ступінь числа.

function numToThePow(num, pow) {
    let result = 1;
    for (let i = 0; i < Math.abs(pow); i++){
        result *= num
    }
    return pow > 0 ? result : 1 / result
}


//3. Створити функцію, яка форматує ім'я, роблячи першу букву великою.

export function nameFormation(name) {
    return name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase()
}

//4. Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.

function salaryWithoutTaxes(salary) {
    return salary * 0.805;
}

//5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.

const getRandomNumber = function(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

//6. Створити функцію, яка рахує скільки разів певна буква повторюється в слові.

const countLetter = function(letter, word) {
    const arr = word.toLowerCase().split('');
    const finalLetter = letter.toLowerCase();
    let counter = 0;
    for (let i = 0; i < arr.length; i++){
        if (finalLetter === arr[i]){
            counter++
        }
    }
    return counter;
}

//7. Створіть функцію, яка конвертує долари в гривні та навпаки

const convertCurrency = function(sum) {
    const RATE = 25;
    if (sum.includes('$')){
        return sum.slice(0, -1) * RATE + 'UAH'
    }
    if (sum.toLowerCase().includes('uah')){
        return sum.slice(0, -3) / RATE + '$'
    }
    return 'Unknown currency'
}



//9. Створіть функцію генерації випадкового паролю (тільки числа)

const getRandomParol = function(number = 8) {
    let parol = '';
    for (let i = 0; i < number; i++) {
        parol += Math.round(Math.random() * 9)
    }
    return parol
}

//11. Створіть функцію, яка видаляє всі букви з речення.

const deleteLetters = function(letter, word) {
    return word.replaceAll(letter, '')

    // let arr = word.toLowerCase().split('');
    // let finalLetter = letter.toLowerCase();
    // let finalArr = [];
    // for(let i = 0; i < arr.length; i++){
    //     if (finalLetter !== arr[i]){
    //         finalArr.push(arr[i])
    //     }
    // }
    // return finalArr.join('')
}

//12. Створіть функцію, яка перевіряє, чи є слово паліндромом. 

function isPalyndrom(word) {
    const finalWord = word.toLowerCase().replaceAll(' ', '')
    return finalWord === finalWord.split('').reverse().join('')
}

function deleteDuplicateLetter(string) {
    let str = string.toLowerCase().replaceAll(' ', '')
    const arr = str.split('')
    for (let i = 0; i < arr.length; i++) {
        if (countLetter(arr[i], str) > 1){
            str = str.replaceAll(arr[i], '')
        }
    }
    return str
}

