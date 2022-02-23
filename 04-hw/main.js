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

function nameFormation(name) {
    return name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase()

    // let arr = name.split('')
    // let smallLetters = arr.slice(1).join('').toLowerCase();
    // let capitalLetter = arr[0].toUpperCase();
    // return `${capitalLetter}${smallLetters}`
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

console.log(`Функція 1: ${getMaxDigit(129706)}`)
console.log(`Функція 2: ${numToThePow(2,-1)}`);
console.log(`Функція 3: ${nameFormation("янА")}`);
console.log(`Функція 4: ${salaryWithoutTaxes(64000)}`);
console.log(`Функція 5: ${getRandomNumber(1, 100)}`);
console.log(`Функція 6: ${countLetter('в', 'Ваня ходив за варениками')}`);
console.log(`Функція 7: ${convertCurrency('500$')}`);
console.log(`Функція 7: ${convertCurrency('5200uah')}`);
console.log(`Функція 9: ${getRandomParol(6)}`);
console.log(`Функція 11: ${deleteLetters('b', 'bee bilingual bbba')}`);
console.log(`Функція 12: ${isPalyndrom('Я несу гусеня')}`);
console.log(`Функція 13: ${deleteDuplicateLetter('Бісквіт був дуже ніжним')}`);
