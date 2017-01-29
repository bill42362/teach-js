// index.js
'use strict';

// Structure
let number = 5; // Number
const numbers = [5, 6, 7, 8]; // Array
let origin = {x: 0, y: 0}; // Structure

console.log('origin:', origin);
console.log('origin.x:', origin.x, ', origin.y:', origin.y);
origin.z = 0;
console.log('second origin:', origin);
// z => property, key
const unit = {x: 1, y: 1, z: 1};
console.log('unit:', unit);
unit.x = 3;
console.log('second unit:', unit);
// unit = {x: 2, y: 2, z: 2}; // This line will causing error!
console.log('unit.t:', unit.t);

// Function:
// let name = function(argument) { return; };
// 令 f(x) = x + 1.
let f = function(x) { return x + 1; };
console.log('f(3):', f(3));

let target = number;
// Test target is odd.
if(target%2 === 0) {
    console.log('target is even');
} else {
    console.log('target is odd');
}

let isOdd = function(target) {
    if(target%2 === 0) { return false; }
    else { return true; }
}

console.log('isOdd(3):', isOdd(3));
console.log('isOdd(6):', isOdd(6));

let isEven = function(target) { return target%2 === 0; }
console.log('isEven(6):', isEven(6));

// Closure
let returnNumber1 = undefined;
{ // Block
    let number1 = 3;
    // number1 的 scope 在 'Block' 裡面;
    console.log('inside block number1:', number1);
    returnNumber1 = function() { return number1; };
}
console.log('outside of block returnNumber1:', returnNumber1);
console.log('outside of block returnNumber1():', returnNumber1());
// console.log('outside of block number1:', number1); // will error
// Closure is a mechanism pack function's block variables.
// Closure 就是把 function 所在的 block 變數打包的機制

let anyFunction = function(anyNumber) {
    let anyNumberPlus2 = anyNumber + 2;
    return function() { return anyNumberPlus2; };
}
console.log('anyFunction(5):', anyFunction(5));
let functionThatAnyFunctionReturn = anyFunction(7);
console.log('functionThatAnyFunctionReturn():', functionThatAnyFunctionReturn());

let fetchUrl = function(url, callbackFunction) {
    // May take ten minutes.
    let result = 'haha'; // haha is from url.

    callbackFunction(result);
}
let fetchUrl2 = function(url, callbackFunction) {
    // May take ten minutes.
    let result = 'haha'; // haha is from url.

    callbackFunction(result);
}

let logFetchUrlResult = function(resultFromUrl) {
    console.log('resultFromUrl:', resultFromUrl);
}

fetchUrl('www.google.com', logFetchUrlResult);
