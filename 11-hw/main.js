const container = document.querySelector('.container')

function generateBlocks() {
    for (let i = 0; i < 25; i++) {
        let div = document.createElement('div');
        div.classList.add('square')
        div.style.backgroundColor = randomColor();
        container.append(div)
    }
}

function generateBlocksInterval() {
    generateBlocks();
    setInterval(() => {
        for (let div of container.children) {
            div.style.backgroundColor = randomColor();
        }
    }, 1000)
}

generateBlocksInterval();

function randomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
}