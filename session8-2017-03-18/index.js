// index.js
'use strict';
const canvas = document.getElementById('first-canvas');
const mousePositionElement = document.getElementById('mouse-position');
// console.log('canvas:', canvas);
const context = canvas.getContext('2d');
// console.log('context:', context);

'當發生 `滑鼠在 canvas 裡移動` 的時候，要做 `更新 position`。'
let position = {x: 0, y: 0};
const drawCircleOnPosition = function(position, radius) {
    context.beginPath();
        context.arc(
            position.x/2, position.y/2, radius,
            0, 2*Math.PI, true
        );
    context.closePath();
    context.fill();
}

const updateMousePositionElement = function() {
    mousePositionElement.textContent
        = `Position: (${position.x}, ${position.y})`;
}

const onMouseMove = function(event) {
    position = {x: event.offsetX, y: event.offsetY};
    updateMousePositionElement();
    drawCircleOnPosition(position, 5);
}
canvas.addEventListener('mousemove', onMouseMove);
