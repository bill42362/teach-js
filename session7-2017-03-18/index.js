// index.js
'use strict';
'當發生 `什麼事情 (event)` 的時候，要做 `什麼事 (function)`。'

let clickTimes = 0;
let mouseInFirst = false;
const firstElement = document.getElementById('first');
const updateFirstElement = function() {
    let color = 'coral';
    if(mouseInFirst) { color = 'brown'; }
    firstElement.style
        = 'width: 150px; height: 50px; '
        + 'background-color: ' + color + '; '
        + 'cursor: pointer;';
    firstElement.textContent
        = 'Click Times:' + clickTimes + ', '
        + 'Mouse In First:' + mouseInFirst;
}
updateFirstElement();

'當發生 `點了 first 一下`，要做 `把 clickTimes 加一`。'
// 把 clickTimes 加一
const addOneToClickTimes = function() {
    clickTimes = clickTimes + 1;
    updateFirstElement();
}
//console.log('firstElement:', firstElement);
firstElement.addEventListener('click', addOneToClickTimes);

const setMouseInFirst = function(isMouseInFirst) {
    mouseInFirst = isMouseInFirst;
    updateFirstElement();
}
'當發生 `滑鼠進入 first`，要做 `mouseInFirst 變 true`。'
const makeMouseInFirstTrue = function() { setMouseInFirst(true); }
firstElement.addEventListener('mouseover', makeMouseInFirstTrue);

'當發生 `滑鼠離開 first`，要做 `mouseInFirst 變 false`。'
const makeMouseInFirstFalse = function() { setMouseInFirst(false); }
firstElement.addEventListener('mouseout', makeMouseInFirstFalse);
