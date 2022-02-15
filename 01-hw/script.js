'use strict'

const apple = 15.678;
const banana = 90.2345;
const kiwi = 123.965;

console.log(`Максимальна ціна ${Math.max(apple, banana, kiwi)}`);
console.log(`Мінімальна ціна ${Math.min(apple, banana, kiwi)}`);

const sum = apple + banana + kiwi;
const sumFloor = Math.floor(apple) + Math.floor(banana) + Math.floor(kiwi)

console.log(`Сума вартості всіх товарів ${sum}`);
console.log(`Сума товарів без копійок ${sumFloor}`);

console.log(`Сума товарів округлена до сотень ${Math.round(sum/100)*100}`);
if(sumFloor%2 === 0){
    console.log("Сума всіх товарів є парним числом");
} else {
    console.log("Сума всіх товарів є непарним числом");
}

console.log(`Решта ${500-sum}`);

console.log(`Середнє значення ${(sum/3).toFixed(2)}`);

const discount = Math.round(Math.random()*100)
console.log(`Випадкова знижка ${discount}%`);

const discountSum = (sum*(1-(discount/100))).toFixed(2);
console.log(`Сума до сплати зі знижкою ${discountSum}`);

console.log(`Чистий прибуток ${(discountSum-(sumFloor/2)).toFixed(2)}`);




