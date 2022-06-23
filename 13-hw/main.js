//рішення з Promise, без async/await

let str = "";
let i = 0;

function getRandomChinese(length) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      let num = Date.now().toString().substring(8);
      str += String.fromCharCode(num);
      i++;
      resolve();
    }, 50);
  }).then(() => (i < length ? getRandomChinese(length) : console.log(str)));
}

getRandomChinese(4);

//рішення з async/await

async function getRandomChinese2(length) {
  let string = "";
  for (let i = 0; i < length; i++) {
    let number = Date.now().toString().substring(8);
    string += String.fromCharCode(number);
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
  return console.log(string);
}

getRandomChinese2(4);
