//Values and Variables
/*
let country = 'Ukraine';
let continent = 'Europe';
let population = 44;
console.log(country);
console.log(continent);
console.log(population);
*/
//Data Types
/*
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/
// let, const and var
/*
let language = 'Ukrainian';
const country = 'Ukraine';
const continent = 'Europe';
const isIsland = false;
isIsland = true;
 */
//Basic Operators
/*
const country = 'Ukraine';
const continent = 'Europe';
const language = 'Ukrainian';
const populationUkraine = 44;

console.log(populationUkraine / 2);
populationUkraine++;
console.log(populationUkraine);
console.log(populationUkraine > 6);
console.log(populationUkraine < 33);
const description1 =
    country +
    ' is in ' +
    continent +
    ', and its ' +
    populationUkraine +
    ' million people speak ' +
    language;
console.log(description1);
 */
// Strings and Template Literals
/*
const country = 'Ukraine';
const continent = 'Europe';
const language = 'Ukrainian';
const populationUkraine = 44;

console.log(populationUkraine / 2);
populationUkraine++;
console.log(populationUkraine);
console.log(populationUkraine > 6);
console.log(populationUkraine < 33);
const description1 = `${country}
is in 
${continent}, 
and it's
${populationUkraine}
million people speak
${language}`;
console.log(description1);
*/
// Taking Decisions: if / else Statements
/*
const country = 'Ukraine';
const populationUkraine = 44;
if (populationUkraine > 33) {
    console.log(`Population of ${country} is above average`);
} else {
    console.log(
        `Population of ${country} is ${33 - populationUkraine} million below average`
    );
}
 */
// Type Conversion and Coercion
/*
let n = '9' - '5'; // 4
console.log(n);
n = '19' - '13' + '17'; // '617'
console.log(n);
n = '19' - '13' + 17; // 23
console.log(n);
n = '123' < 57; // false
console.log(n);
n = 5 + 6 + '4' + 9 - 4 - 2; // 1143
console.log(n);
 */

// Equality Operators == vs. ===
/*
// const numNeighbours = prompt('How many neighbour countries does your country have?');
// Later: This helps us prevent bugs like this No borders because '1' === 1 false
const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}
 */

// Logical Operators
/*
const country = 'Ukraine';
const isIsland = false;
const language = 'Ukrainian';
const populationUkraine = 44;
const languageSarahWont = language === 'English';
const populationSarahWont = populationUkraine < 50;
const isIslandSarahWont = isIsland === false;

if (languageSarahWont && populationSarahWont && isIslandSarahWont) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}
*/

// The switch Statement
/*
const language = 'chinese';

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}
 */

// The conditional (Ternary) Operator
/*
const country = 'Ukraine';
const populationUkraine = 44;
console.log(`Population of ${country} is ${populationUkraine > 33 ? 'above' : 'below'} average`);
 */