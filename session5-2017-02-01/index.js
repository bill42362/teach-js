// index.js
'use strict';
// Native functions

let numbers = [5, 6, 7, 8];
let strings = ['five', 'six', 'seven', 'eight'];
let mix = [5, 'six', 7, 'eight'];

let slicedNumbers = numbers.slice(1, 3);
console.log('slicedNumbers:', slicedNumbers);
let oneArgumentSlicedNumbers = numbers.slice(1);
console.log('oneArgumentSlicedNumbers:', oneArgumentSlicedNumbers);
console.log('numbers:', numbers);

let concated = numbers.concat(numbers);
console.log('concated:', concated);
let secondConcated = numbers.concat([9, 10]);
console.log('secondConcated:', secondConcated);
let thirdConcated = numbers.concat(11);
console.log('thirdConcated:', thirdConcated);

let numbers2 = numbers.concat();
console.log('numbers2:', numbers2);
numbers2[1] = 5;
console.log('numbers2:', numbers2);
console.log('after numbers:', numbers);

// replace + slice => splice
// numbers.splice(1);
// console.log('after after numbers:', numbers);
// numbers.splice(1, 1);
// console.log('after after after numbers:', numbers);
numbers.splice(1, 2, {x: 0, y: 0}, 9, 10);
console.log('after after after after numbers:', numbers);

numbers.push(20, 21, 22);
console.log('after after after after after numbers:', numbers);

let popedNumber = numbers.pop();
console.log('after x 6 numbers:', numbers, ', popedNumber:', popedNumber);
console.log('after x 6 numbers:', numbers, ', numbers.length:', numbers.length);

// DOM => Document Object Model
let firstDiv = document.getElementById('first');
firstDiv.textContent = 'haha!';
firstDiv.style = 'background-color: pink; color: skyblue;';
firstDiv.className = 'hehe';
//console.log('first:', first);

let textDivs = document.getElementsByClassName('text');
//console.log('textDivs:', textDivs);
textDivs[0].textContent = 'lala';
textDivs[1].style = 'background-color: mistyrose;';

// Functional programing
// 藉由傳入 function a 的 function b 來定義 function a 的行為。
// argument function
let numbers2 = [7, 8, 5, 6];

let sortedNumbers2 = numbers2.concat().sort(function(a, b) {
    if(a > b) { return 1; }
    else { return -1; }
});
console.log('sortedNumbers2:', sortedNumbers2);

let filteredNumbers2 = numbers2.filter(function(number) {
    return 0 === number%2;
});
console.log('filteredNumbers2:', filteredNumbers2);
let oddNumbers2 = numbers2.filter(function(number) {
    return 0 !== number%2;
});
console.log('oddNumbers2:', oddNumbers2);
let largerThanSix = numbers2.filter(function(number) {
    return number > 6;
});
console.log('largerThanSix:', largerThanSix);

let smallerThanSeven = [];
// filter numbers that smaller than seven.
for(let index = 0; index < numbers2.length; index = index + 1) {
    if(numbers2[index] < 7) {
        smallerThanSeven.push(numbers2[index]);
    }
}
console.log('smallerThanSeven:', smallerThanSeven);
