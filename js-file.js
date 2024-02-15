const container = document.querySelector('.container');

function createGrid() {
    for (let i = 0; i < 256; i++) {
        let square = document.createElement('div');
        square.classList.toggle('square');
        container.appendChild(square);
    }
}

createGrid();