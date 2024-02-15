const container = document.querySelector('.container');

function createGrid() {
    for (let i = 0; i < 256; i++) {
        let square = document.createElement('div');
        square.classList.toggle('square');

        square.addEventListener('mouseover', function(event) {
            let r = Math.floor(Math.random() * 256).toString(16);
            let g = Math.floor(Math.random() * 256).toString(16);
            let b = Math.floor(Math.random() * 256).toString(16);
            event.target.style.backgroundColor = '#' + r + g + b;
            console.log('#' + r + g + b);
        });

        container.appendChild(square);
    }
}

createGrid();