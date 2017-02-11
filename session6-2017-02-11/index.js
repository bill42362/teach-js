// index.js
'use strict';
// Functional programing
// 藉由傳入 function a 的 function b 來定義 function a 的行為。
// sort, filter
// forEach, map, reduce

let numbers = [7, 8, 9, 10];

let numbersPlusOne = [];
let forEachResult = numbers.forEach(function(number, index) {
    //console.log('forEach() number:', number, ', index:', index);
    //numbersPlusOne.push(number + 1);
    numbersPlusOne[index] = number + 1;
});
console.log('forEachResult:', forEachResult);
console.log('numbersPlusOne:', numbersPlusOne);

// map => 映射
let mapResult = numbers.map(function(number) {
    return Math.sqrt(number)*10;
});
console.log('mapResult:', mapResult);

// reduce => 歸納
// let numbers = [7, 8, 9, 10];
let reduceResult0 = numbers.reduce(function(currentResult, number) {
    return currentResult + number;
}, 0);
console.log('reduceResult0:', reduceResult0);

let initialValue = {summation: 0};
let reduceResult = numbers.reduce(
    function(currentResult, number, index) {
        console.log('currentResult:', currentResult, ', number:', number, ', index:', index);
        return {summation: currentResult.summation + number};
    },
    initialValue
);
console.log('reduceResult:', reduceResult);

let cat = {weight: 10};
console.log('cat.weight:', cat.weight);
console.log('cat["weight"]:', cat['weight']);
let objects = [
    {7: 'seven'},
    {8: 'eight'},
    {9: 'nine'},
    {10: 'ten'},
];
let reduceResult2 = objects.reduce(function(currentResult, object, index) {
    let nextResult = currentResult;
    nextResult[index + 7] = object[index + 7];
    return nextResult;
}, {});
console.log('reduceResult2:', reduceResult2);

let reduceResult3 = objects.reduce(function(currentResult, object, index) {
    return Object.assign({}, currentResult, object);
}, {});
console.log('reduceResult3:', reduceResult3);
