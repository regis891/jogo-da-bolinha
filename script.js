const circle = document.getElementById("circle");
const gameArea = document.getElementById("gameArea");

let posX = 50;
let posY = 50;

const moveSpeed = 50;
const originalBackgroundColor = '#87CEEB';

document.addEventListener('keydown', (event) => {
    switch (event.code) {
        case 'ArrowUp':
            if (posY > 0)
                posY = posY - moveSpeed;
            break;
        case 'ArrowDown':
            if (posY < window.innerHeight - circle.offsetHeight)
                posY = posY + moveSpeed;
            break;
        case 'ArrowLeft':
            if (posX > 0)
                posX = posX - moveSpeed;
            break
        case 'ArrowRight':
            if (posX < window.innerwidth - circle.offsetwidth)
                posX = posX + moveSpeed;
            break;
    }
    updatecircleposition();
});

function updateCirclePosition () {
    circle.style.left = `${posX}px`;
    circle.style.top = `${posY}px`;
}