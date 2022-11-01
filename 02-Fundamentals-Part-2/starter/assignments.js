'use strict';
// Functions
/*
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people, and it's capital city is ${capitalCity}`;
}

const ukraine = describeCountry('Ukraine', 44, 'Kiev');
const finland = describeCountry('Finland', 6, 'Helsinki');
const usa = describeCountry('USA', 323, 'Washington');
console.log(ukraine);
console.log(finland);
console.log(usa);
*/

// Function Declarations vs. Expressions
/*
function percentageOfWorld1(country, population) {
    return `${country} has ${population} million people, so it's about ${(population/7900)*100}% of the world population`;
}

const ukraine = percentageOfWorld1('Ukraine', 400);
const finland = percentageOfWorld1('Finland', 100);
const usa = percentageOfWorld1('USA', 1500);
console.log(ukraine);
console.log(finland);
console.log(usa);

const percentageOfWorld2 = function (country, population) {
    return `${country} has ${population} million people, so it's about ${(population/7900)*100}% of the world population`;
}

const ukraine2 = percentageOfWorld2('Ukraine', 400);
const finland2 = percentageOfWorld2('Finland', 100);
const usa2 = percentageOfWorld2('USA', 1500);
console.log(ukraine2);
console.log(finland2);
console.log(usa2);
 */

// Arrow Functions
/*
const percentageOfWorld3 = (country, population) => `${country} has ${population} million people, so it's about ${(population/7900)*100}%`;
console.log(percentageOfWorld3('Ukraine', 400));
console.log(percentageOfWorld3('Finland', 100));
console.log(percentageOfWorld3('USA', 1500));
 */

// Functions Calling Other Functions
/*
const percentageOfWorld1 = population => (population/7900)*100;

const describePopulation = function (country, population) {
    return `${country} has ${population} million people, so it's about ${percentageOfWorld1(population)}% of the world population`;
}

const ukraine = describePopulation('Ukraine', 400);
const finland = describePopulation('Finland', 100);
const usa = describePopulation('USA', 1500);
console.log(ukraine);
console.log(finland);
console.log(usa);
 */

// Introduction to Arrays

/*
const percentageOfWorld1 = population => (population/7900)*100;
const populations = [400, 100, 1500, 900];
console.log(populations.length === 4);

const percentage = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[populations.length - 1])];
console.log(percentage);
 */

// Basic Array Operations (Methods)
/*
const neighbours = [
    'Romania',
    'Moldova',
    'Hungary',
    'Slovakia',
    'Poland',
    'Russia'
];
console.log(neighbours);

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country');
}

neighbours[neighbours.indexOf('Russia')] = 'China';
console.log(neighbours);
*/

// Introduction to Objects
/*
const myCountry = {
    country: 'Ukraine',
    capital: 'Kiev',
    language: 'Ukrainian',
    population: 44,
    neighbours: [
        'Romania',
        'Moldova',
        'Hungary',
        'Slovakia',
        'Poland',
        'Russia'
    ]
};
*/

// Dot vs. Bracket Notation
/*
const myCountry = {
    country: 'Ukraine',
    capital: 'Kiev',
    language: 'ukrainian',
    population: 44,
    neighbours: [
        'Romania',
        'Moldova',
        'Hungary',
        'Slovakia',
        'Poland',
        'Russia'
    ]
};

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries 
and a capital called ${myCountry.capital}.`);

console.log(myCountry.population += 2);
myCountry["population"] -= 2;
console.log(myCountry.population);
 */

// Object Methods
/*
const myCountry = {
    country: 'Ukraine',
    capital: 'Kiev',
    language: 'ukrainian',
    population: 44,
    neighbours: [
        'Romania',
        'Moldova',
        'Hungary',
        'Slovakia',
        'Poland',
        'Russia'
    ],

    describe: function () {
        return console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries 
and a capital called ${this.capital}.`);
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);
 */

// Iteration The For Loop
/*
for (let voters = 1; voters <= 50; voters++) {
    console.log(`Voter number ${voters} is currently voting`);
}
 */

// Looping Arrays, Breaking and Continuing
/*
const percentages2 = [];
const populations2 = [400, 100, 1500, 900];

for (let i = 0; i < populations2.length; i++) {
    percentages2.push((populations2[i] / 7900) * 100)
}
console.log(percentages2);
 */

// Looping Backwards and Loops in Loops
/*
const listOfNeighbour = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];
console.log(listOfNeighbour);

for (let neighbors = 0; neighbors < listOfNeighbour.length; neighbors++) {
    for (let country = 0; country < listOfNeighbour[neighbors].length; country++) {
        console.log(`Neighbour: ${listOfNeighbour[neighbors][country]}`);

    }
}
 */

// The while Loop
/*
const percentages3 = [];
const populations3 = [400, 100, 1500, 900];

// for (let i = 0; i < populations2.length; i++) {
//     percentages2.push((populations2[i] / 7900) * 100)
// }
// console.log(percentages2);

let i = 0;
while (i < populations3.length) {
    percentages3.push((populations3[i] / 7900) * 100);
    i++;
}
console.log(percentages3);
 */