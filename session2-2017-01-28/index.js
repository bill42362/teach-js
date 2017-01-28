// index.js
'use strict';

let number1 = 10;
let number2 = 5;
let number3 = 6;
let number4 = 8;
// if(判斷 true/false) { 要執行的程式 }
// if ... else => 如果 ... 不然 ...
// if ... else if ... else => 如果 ... 不然如果 ... 不然 ...
// == === != !===

let target = number3;

if(target%5 === 0) {
    console.log('this is 5 times something.');
} else if(target%5 === 1) {
    console.log('left one.');
} else if(target%5 === 2) {
    console.log('left two.');
} else if(target%5 === 3) {
    console.log('left three.');
} else {
    console.log('left four.');
}

console.log('==== switch ====');

switch(target%5) {
    case 0:
        console.log('this is 5 times something.');
        break;
    case 1:
        console.log('left one.');
        break;
    case 2:
        console.log('left two.');
        break;
    case 3:
        console.log('left three.');
        break;
    default:
        console.log('left four.');
        break;
}

console.log('==== array ====');
let numberArray = [10, 5, 6, 8];
console.log('numberArray[0]:', numberArray[0]);
console.log('numberArray[1]:', numberArray[1]);
console.log('numberArray[2]:', numberArray[2]);
console.log('numberArray[3]:', numberArray[3]);
console.log('numberArray[4]:', numberArray[4]);

console.log('before numberArray[2]:', numberArray[2]);
numberArray[2] = 7;
console.log('after numberArray[2]:', numberArray[2]);

console.log('before numberArray[4]:', numberArray[4]);
numberArray[4] = 9;
console.log('after numberArray[4]:', numberArray[4]);

console.log('before numberArray:', numberArray);
numberArray[0] = numberArray[0] + 1;
numberArray[1] = numberArray[1] + 1;
numberArray[2] = numberArray[2] + 1;
numberArray[3] = numberArray[3] + 1;
numberArray[4] = numberArray[4] + 1;
console.log('after numberArray:', numberArray);

// while => 當
// do ... while => 當
let pin = 0;
while(pin < 5) {
    console.log('numberArray[' + pin + ']:', numberArray[pin]);
    pin = pin + 1;
}

while(false) {
    console.log('inside false while');
}

/*
   This is my answer:
   Please send a e-mail to bill42362@gmail.com.
   We can have a talk.
   Thanks for watching my live!!
 */

/*
pin = 0;
do {
    console.log('numberArray[' + pin + ']:', numberArray[pin]);
    pin = pin + 1;
} while(pin < 5);
 */

// for 
// for(initial condition; continue condition; step process) { what you wanna do.}
// for(開始前做的事; 怎樣要繼續做; 每次做完要做的事) { 真的想做的事 }
console.log('===== for loop =====');
for(let index = 0; index < 5; index = index + 1) {
    console.log('numberArray[' + index + ']:', numberArray[index]);
}
let index = 10;
console.log('index:', index);
