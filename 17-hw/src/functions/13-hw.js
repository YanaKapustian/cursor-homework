//рішення з Promise, без async/await

let str = "";
let i = 0;

// export function getRandomChinese(length) {
//     setTimeout(() => {
//       let num = Date.now().toString().substring(8);
//       str += String.fromCharCode(num);
//       i++;
//       i < length ? getRandomChinese(length) : str;
//       if (i < length) {
//         getRandomChinese(length)
//       } else {
//         return str
//       }
//     }, 50)
// }


//рішення з async/await

export async function getRandomChinese(length) {
  let string = "";
  for (let i = 0; i < length; i++) {
    let number = Date.now().toString().substring(8);
    string += String.fromCharCode(number);
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
  console.log("hw 13: ", string);
}

