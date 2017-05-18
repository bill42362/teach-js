// index.js
'use strict';
'會隨著 [xx] 而 [改變] 的 [畫面]';
'[xx] = 時間，資料，使用者的行為 (mousemove, click, scroll)';

'window.setInterval(要做的事情[function], 間隔要多久[ms]);'
let animationStartTime = Date.now();
let changingNumber = Date.now();
const numberElement = document.getElementById('changing-number');
//console.log('numberElement:', numberElement);

const displayNumber = function(number, element) { // pure function
    element.textContent = 'Number: ' + number;
}
const changeNumber = function() {
    changingNumber = Date.now();
}
const nextStep = function() {
    changeNumber();
    displayNumber(changingNumber, numberElement);
    if(10000 > Date.now() - animationStartTime) {
        window.requestAnimationFrame(nextStep);
    } else {
        console.log('Animation finished.');
        return;
    }
}
//window.setInterval(nextStep, 16);
window.requestAnimationFrame(nextStep); // 有空的時候，再幫我畫下一步，霸脫
