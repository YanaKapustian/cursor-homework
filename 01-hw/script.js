'use strict'

const APPLE = 15.678;
const BANANA = 90.2345;
const KIWI = 123.965;

console.log(`Максимальна ціна ${Math.max(APPLE, BANANA, KIWI)}`);
console.log(`Мінімальна ціна ${Math.min(APPLE, BANANA, KIWI)}`);

const SUM = APPLE + BANANA + KIWI;
const SUM_FLOOR = Math.floor(APPLE) + Math.floor(BANANA) + Math.floor(KIWI);

console.log(`Сума вартості всіх товарів ${SUM}`);
console.log(`Сума товарів без копійок ${SUM_FLOOR}`);

console.log(`Сума товарів округлена до сотень ${Math.round(SUM / 100) * 100}`);
if(SUM_FLOOR % 2 === 0){
    console.log("Сума всіх товарів є парним числом");
} else {
    console.log("Сума всіх товарів є непарним числом");
}

console.log(`Решта ${500 - SUM}`);

console.log(`Середнє значення ${(SUM / 3).toFixed(2)}`);

const DISCOUNT = Math.round(Math.random() * 100)
console.log(`Випадкова знижка ${DISCOUNT}%`);

const DISCOUNT_SUM = (SUM * (1 - (DISCOUNT / 100))).toFixed(2);
console.log(`Сума до сплати зі знижкою ${DISCOUNT_SUM}`);

console.log(`Чистий прибуток ${(DISCOUNT_SUM - (SUM_FLOOR / 2)).toFixed(2)}`);

for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 0)
    setTimeout(() => {
        console.log(i);
    }, 1000)
}






