'use strict'

let N;
do {
    N = Number(prompt('Введіть ціле число N'))
} while (!Number.isInteger(N))

let M;
do {
    M = Number(prompt(`Введіть ціле число M більше за ${N}`))
} while (!Number.isInteger(M) || N > M);

let boolean = confirm('Потрібно пропускати парні числа?')

let sum = 0;

if (boolean) {
    for (N; N <= M; N++){
        if(N % 2 === 1 || N % 2 === -1){ // врахувала можливість введення від'ємних чисел
            sum += N
        }
    }
    console.log(sum);
} else {
    for (N; N <= M; N++){
        sum += N
    }
    console.log(sum);
}
