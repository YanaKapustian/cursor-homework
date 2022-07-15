function getRandomArray(length, min, max) {
    let res = [];
    for (let i = 0; i < length; i++) {
        res.push(Math.round(Math.random() * (max - min) + min))
    }
    return res;
}

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

function getAverage(...nums) {
    let numbers = nums.filter(num => Number.isInteger(num))
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum / numbers.length;
}

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

function filterEvenNumbers(...numbers) {
    return numbers.filter(elem => elem % 2 === 1)
}

function countPositiveNumbers(...numbers) {
    let count = 0; 
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            count++
        }
    }
    return count;
}

function getDividedByFive(...numbers) {
    return numbers.filter(elem => elem % 5 === 0)
}

export function replaceBadWords(string) {
    let badWords = ['fuck', 'shit']
    for (let i = 0; i < badWords.length; i++) {
        while (string.includes(badWords[i])) {
            string = string.replace(badWords[i], '*'.repeat(badWords[i].length))
        }
    }
    return string
}

function divideByThree(word) {
    let arr = word.replaceAll(' ', '').toLowerCase().split('');
    let divided = [];
    let num = Math.ceil(arr.length / 3);
    for (let i = 0; i < num; i++) {
        divided.push(arr.splice(0, 3).join(''))
    }
    return divided;
}