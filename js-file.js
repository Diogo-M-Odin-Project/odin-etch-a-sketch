const container = document.querySelector('.container');

function createGrid(squaresPerSide) {
    let squareWidth = (parseInt(getComputedStyle(container).width) / squaresPerSide).toString() + "px";

    console.log(squareWidth);

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        let square = document.createElement('div');
        square.classList.toggle('square');

        square.style.width = squareWidth;
        square.style.height = squareWidth;

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

createGrid(5);

/*
function changeGrid(squaresPerSide) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
    createGrid(squaresPerSide);
}
*/