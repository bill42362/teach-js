// index.js
'use strict';
// Object
let snake = {width: 20, length: 200, weight: 3};

let Animal = function(argWeight, argSpeed, argVoice) {
    // instance variable
    this.weight = argWeight;
    this.voice = argVoice;
    if(argSpeed) { this.speed = argSpeed; }

    // instance function
    this.bark = function() { console.log(this.voice); };
};
// Static variable
Animal.voice = 'haha';
console.log('Animal.voice:', Animal.voice);
// Static function
Animal.isAnimal = function(animal) {};
Animal.run = function(animal) {
    console.log('Animal.run() this:', this);
    animal.position = {
        x: animal.position.x + animal.speed,
        y: animal.position.y + animal.speed,
    };
}
// prototype variable => instance 之間共享的預設值。
Animal.prototype.mood = Math.random();
Animal.prototype.speed = 10;
Animal.prototype.position = {x: 0, y: 0};
Animal.prototype.direction = {x: 1, y: 0};
// prototype function
Animal.prototype.prototypeBark = function() { console.log(this.voice); };

let cat = new Animal(5, 40, 'meow'); // instance of Animal.
let dog = new Animal(20, 45, 'won'); // instance of Animal.
let pig = new Animal(200, undefined, 'gow'); // instance of Animal.
/*
console.log('Animal.prototype:', Animal.prototype);
console.log('before cat:', cat);
console.log('before cat.position:', cat.position);
cat.position = {x: 1, y: 0};
console.log('after cat:', cat);
console.log('after cat.position:', cat.position);
console.log('pig:', pig, ', pig.speed:', pig.speed);
cat.mood = 0.5;
console.log('cat.mood:', cat.mood, ', pig.mood:', pig.mood);
console.log('cat:', cat);
 */

console.log('before running cat.position:', cat.position);
Animal.run(cat);
console.log('after running cat.position:', cat.position);

cat.prototypeBark();
pig.prototypeBark();

/*
console.log('cat:', cat, ', pig:', pig);
console.log('isCatBarkEqualsPigBark:', cat.bark === pig.bark);
console.log(
    'isCatPrototypeBarkEqualsPigPrototypeBark:',
    cat.prototypeBark === pig.prototypeBark
);
 */

console.log('Number:', Number);
let number1 = Number(10);
let notANumber = +undefined;
console.log('notANumber:', notANumber, ', number1:', number1);
console.log(
    'Number.isNaN(notANumber):',
    Number.isNaN(notANumber),
    ', Number.isNaN(number1):',
    Number.isNaN(number1)
);

Number.isNaN(number1);
