'use strict';
// Activating Strict Mode
/*
// 'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
 */

// Functions
/*
function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangesJuice = fruitProcessor(2, 4);
console.log(appleOrangesJuice);
 */

// Function Declarations vs. Expressions
/*
// Function Declaration
function calcAge(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge(1991);

// Function Expressions
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);
 */

// Arrow Functions
/*
// Function Expressions
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// Arrow functions
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearUntilRetirement(1991, 'Jonas'));
console.log(yearUntilRetirement(1980, 'Bob'));
 */

// Functions Calling Other Functions
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
}
console.log(fruitProcessor(2, 3));
 */

// Reviewing Functions
/*

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
            } else {
        console.log(`${firstName} already retired 🎉`);
        return -1;
    }

}

console.log(yearUntilRetirement(1991, 'Jonas'));
console.log(yearUntilRetirement(1950, 'Mike'));
*/

// Introduction to Arrays
/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice'];

const firstName = 'Jonas';
const jonas = [firstName, 'Shmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const yeasr = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(yeasr[0]);
const age2 = calcAge(yeasr[1]);
const age3 = calcAge(yeasr[yeasr.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(yeasr[0]), calcAge(yeasr[1]), calcAge(yeasr[yeasr.length - 1])];
console.log(ages);
*/

// Basic Array Operations (Methods)
/*
// Add elements
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay'); // Push - add last element
console.log(friends);
console.log(newLength);

friends.unshift('John'); // Unshift - add first element
console.log(friends);

// Remove elements
friends.pop(); // Pop - remove last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // Shift - remove first element
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}
*/

// Introduction to Objects
/*

const jonasArray = [
    'Jonas',
    'Shmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];
console.log(jonasArray);

const jonas = {
    firstName: 'Jonas',
    lastName: 'Shmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
*/

// Dot vs. Bracket Notation
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Shmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasshmedtman';
console.log(jonas);

// Challenge
// 'Jonas has 3 friends, and his best friend is called Michael'

console.log(`${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`);
 */

// Object Methods
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Shmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverLicense: true,

     // calcAge: function (birthYear) {
     //    return 2037 - birthYear;
     // }

    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    jonasDescription: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'not'} driver's license`;
    }
};

console.log(jonas.calcAge());
// console.log(jonas["calcAge"](1991));

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// 'Jonas is a 46-year old teacher, and he has a driver's license'
console.log(jonas.jonasDescription());
 */

// Iteration The For Loop
/*
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');

// for loop keeps running while condition is TRUE
for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}
 */

// Looping Arrays, Breaking and Continuing
/*
const jonasArray = [
    'Jonas',
    'Shmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];

// console.log(jonasArray[0]);
// console.log(jonasArray[1]);
// ...
// console.log(jonasArray[4]);
// jonasArray[5] does NOT exist

for (let i = 0; i < jonasArray.length; i++) {
    // Reading from jonasArray
    console.log(jonasArray[i], typeof jonasArray[i]);

    // Filling types array
    // types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);

}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and brake

console.log('--- ONLY STRINGS ---');
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;

    console.log(jonasArray[i], typeof jonasArray[i]);
}


console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === "number") break;

    console.log(jonasArray[i], typeof jonasArray[i]);
}
 */

// Looping Backwards and Loops in Loops
/*
const jonasArray = [
    'Jonas',
    'Shmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

// 0, 1 ..., 4
// 4, 3 ..., 0

for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(i, jonasArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------- Starting exercise ${exercise} -------`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}
 */

// The while Loop
/*
// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice!== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}
 */