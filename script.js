const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');      // creation of a CanvasRenderingContext2D object representing a two-dimensional rendering context.

const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearBtn = document.getElementById('clear');

let size = 10;     // brush size
let isPressed;
let color = 'black';
let x = undefined;
let y = undefined

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove', (e) => {   
    if (isPressed) {     // only draws when mouse is held down
        const x2 = e.offsetX;     // gets the cursors x coord
        const y2 = e.offsetY;     // gets the cursors y coord
        
        drawCricle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    } 
});

function drawCricle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

increaseBtn.addEventListener('click', () => {
    size += 2;
    if (size === 52) {
        size = 50;
    }
    sizeEl.innerText = size;
});

decreaseBtn.addEventListener('click', () => {
    size -= 2;
    if (size === 0) {
        size = 2;
    }
    sizeEl.innerText = size;
});

colorEl.addEventListener('change', (e) => {
    color = e.target.value;
});

clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});



