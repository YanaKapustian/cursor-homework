function getRandomArray(length, min, max) {
    let res = [];
    for (let i = 0; i < length; i++) {
        res.push(Math.round(Math.random() * (max - min) + min))
    }
    return res;
}
console.log("Рандомний масив", getRandomArray(10, 1, 50));

function getModa(...numbers) {
    //викорустовую об'єкти, бо колись зустрічала схоже завдання
    let obj = {};
    let res = [];
    let moda = [];
    for (let i = 0; i < numbers.length; i++) {
        if (Number.isInteger(numbers[i])) {
            if (obj[numbers[i]]) {
                obj[numbers[i]] += 1;
            } else {
                obj[numbers[i]] = 1;
                res.push(numbers[i])
            }
        }
    }
    res.sort((a, b) => obj[b] - obj[a])
    //оскільки мод може буде декілька, то перевіряю, чи є елементи з такою ж частотою, як і перший елемент відсортованого масиву
    for (let i = 0; i < res.length; i++) {
        if (obj[res[i]] == obj[res[0]]) {
            moda.push(res[i])
        }
    }
    return moda;
}
console.log('Мода', getModa(1, 2, 2, 3, 4, 3, 2, 5, 5, 5));

function getAverage(...numbers) {
    let sum = 0;
    let count = 0;
    //рахуємо кількість нецілих чисел, якщо такі є, і віднімаємо від загальної довжини масиву
    for (let i = 0; i < numbers.length; i++) {
        if (Number.isInteger(numbers[i])) {
            sum += numbers[i]
        } else {
            count++
        }
    }
    return sum / (numbers.length - count);
}
console.log('Середнє значення', getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 165.3));

function getMedian(...numbers) {
    let arr = [];
    for (let i = 0; i < numbers.length; i++) {
        if (Number.isInteger(numbers[i])) {
            arr.push(numbers[i])
        }
    }
    arr.sort((a, b) => a - b);
    if (arr.length % 2 === 0) {
        let middle = arr.length / 2;
        return (arr[middle] + arr[middle - 1]) / 2;
    } else {
        let middle = Math.floor(arr.length / 2)
        return arr[middle]
    }
}
console.log('Медіана', getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

function filterEvenNumbers(...numbers) {
    return numbers.filter(elem => elem % 2 === 1)
}
console.log('Непарна числа', filterEvenNumbers(1, 2, 3, 4, 5, 6));

function countPositiveNumbers(...numbers) {
    let count = 0; 
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            count++
        }
    }
    return count;
}
console.log('Кількість додатних чисел', countPositiveNumbers(1, -2, 3, -4, -5, 6));

function getDividedByFive(...numbers) {
    return numbers.filter(elem => elem % 5 === 0)
}
console.log('Числа, які діляться на 5', getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 15));


function replaceBadWords(string) {
    let badWords = ['fuck', 'shit']
    let str = ''
    for (let i = 0; i < badWords.length; i++) {
        if (string.includes(badWords[i])) {
            let index = string.indexOf(badWords[i])
            str += string.slice(0, index)
            str += '*'.repeat(badWords[i].length)
            str += string.slice(index + badWords[i].length)
        }
    }
    return str
}
console.log(replaceBadWords("Are you fucking kidding?"));
console.log(replaceBadWords("It's bullshit!"));

function divideByThree(word) {
    let arr = word.replaceAll(' ', '').toLowerCase().split('');
    let divided = [];
    let num = Math.ceil(arr.length / 3);
    for (let i = 0; i < num; i++) {
        divided.push(arr.splice(0, 3).join(''))
    }
    return divided;
}
console.log(divideByThree("C omma nder"))