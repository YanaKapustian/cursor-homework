function getRandomArray(length, min, max) {
    let res = [];
    for (let i = 0; i < length; i++) {
        res.push(Math.round(Math.random() * (max - min) + min))
    }
    return res;
}
console.log("Рандомний масив", getRandomArray(10, 1, 50));

function getModa(...nums) {
    //викорустовую об'єкти, бо колись зустрічала схоже завдання
    let numbers = nums.filter(num => Number.isInteger(num))
    let obj = {};
    let moda = [];
    for (let i = 0; i < numbers.length; i++) {
        if (obj[numbers[i]]) {
            obj[numbers[i]] += 1;
        } else {
            obj[numbers[i]] = 1;
        }
    }
    let max = Math.max(...Object.keys(obj))
    //оскільки мод може буде декілька, то перевіряю, чи є елементи з такою ж частотою, як і перший елемент відсортованого масиву
    let keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
        if (obj[keys[i]] == obj[max]) {
            moda.push(+keys[i])
        }
    }
    return moda;
}
console.log('Мода', getModa(1, 2, 2, 3, 4, 3, 2, 5, 5, 5));

function getAverage(...nums) {
    let numbers = nums.filter(num => Number.isInteger(num))
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum / numbers.length;
}
console.log('Середнє значення', getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 165.3));

function getMedian(...numbers) {
    let arr = numbers.filter(num => Number.isInteger(num))
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
    for (let i = 0; i < badWords.length; i++) {
        while (string.includes(badWords[i])) {
            string = string.replace(badWords[i], '*'.repeat(badWords[i].length))
        }
    }
    return string
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