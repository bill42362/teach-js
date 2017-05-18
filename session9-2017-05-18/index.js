// index.js
'use strict';
const canvasElement = document.getElementById('first-canvas');
const mousePositionElement = document.getElementById('mouse-position');
// console.log('canvasElement:', canvasElement);
const context = canvasElement.getContext('2d');
const antialiasFactor = 2; // 反鋸齒化;去毛邊係數
context.canvas.width = antialiasFactor*canvasElement.clientWidth;
context.canvas.height = antialiasFactor*canvasElement.clientHeight;
'a, b, c,'
'd, e, f,'
'0, 0, 1,'

'1, 0, 0,'
'0, 1, 0,'
'0, 0, 1,'
//context.transform(a, d, b, e, c, f);
context.transform(antialiasFactor, 0, 0, antialiasFactor, 0, 0);
// console.log('context.canvas:', context.canvas);
// console.log('context:', context);

'當發生 `滑鼠在 canvas 裡移動` 的時候，要做 `更新 position`。'
let position = {x: 0, y: 0};
const drawCircleOnPosition = function(position, radius) {
    context.beginPath();
        context.arc(
            position.x, position.y, radius,
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
canvasElement.addEventListener('mousemove', onMouseMove);
