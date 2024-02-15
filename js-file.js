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
        });

        container.appendChild(square);
    }
}

createGrid(16);

const button = document.querySelector('#button');


button.addEventListener('click', function(event) {
    let squaresPerSide = parseInt(prompt("Choose number of squares to use in new grid. (Up to 100)"));
    if (squaresPerSide > 100) {
        alert("Too many squares.");
        return;
    } else if (squaresPerSide <= 0) {
        alert("Number too short.");
        return;
    } else if (isNaN(squaresPerSide)) {
        alert("This is not a number");
        return;
    }

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    createGrid(squaresPerSide);
});
