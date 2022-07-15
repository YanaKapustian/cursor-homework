
export function* newFontGenerator(size) {
    let word = yield size;
    while (true) {
        switch(word) {
            case 'up':
                word = yield size += 2;
                break;
            case 'down':
                word = yield size -= 2;
                break;
            default:
                word = yield size;
        }
    }
}

//const fontGenerator = newFontGenerator(20)

// console.log(fontGenerator.next('up').value);
// console.log(fontGenerator.next('up').value);
// console.log(fontGenerator.next('up').value);
// console.log(fontGenerator.next().value);
// console.log(fontGenerator.next('down').value);
// console.log(fontGenerator.next('down').value);
// console.log(fontGenerator.next('down').value);




// const text = document.querySelector('p')
// const btnUp = document.querySelector('#up')
// const btnDown = document.querySelector('#down')

// let fz = newFontGenerator(14);
// text.style.fontSize = fz.next().value + 'px';

// btnUp.addEventListener('click', () => {
//     text.style.fontSize = fz.next('up').value + 'px';
// })

// btnDown.addEventListener('click', () => {
//     text.style.fontSize = fz.next('down').value + 'px';
// })