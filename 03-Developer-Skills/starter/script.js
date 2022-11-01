// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
let rock = 1 + 1;

const calcAge = birthYear => 2037 - birthYear;
console.log(calcAge(1991));
 */

/*
const country = prompt('Where are you from?');
const listOfCountries = ['Honduras', 'United Arab Emirates', 'Djibouti', 'Seychelles', 'Antigua', 'Vietnam', 'Hungary',
    'Tajikistan', 'Austria', 'Fiji', 'DR Congo', 'Papua New Guinea', 'Serbia', 'Comoros', 'Israel', 'Switzerland', 'Turkey',
    'Germany', 'Togo', ' Holy See', 'Sierra Leone', 'Guyana', 'Andorra', 'Bhutan', 'Laos', 'Dominica', 'Paraguay', 'Thailand',
    'Bulgaria', 'Libya', 'Solomon Island', 'Lebanon', 'United Kingdom', 'Nicaragua', 'France', 'Kyrgyzstan', 'El Salvador',
    'Montenegro', 'Luxembourg', 'Italy', 'Turkmenistan', 'Tanzania', 'South Africa', 'Marshall Islands', 'Suriname', 'Denmark',
    'Cabo Verde', 'Finland', 'Congo', 'Micronesia', 'Slovakia', 'Myanmar', 'Norway', 'Maldives', 'Kenya', 'Saint Kitts & Nevis',
    'South Korea', 'Oman', 'State of Palestine', 'Costa Rica', 'Colombia', 'Liberia', 'Ireland', 'Central African Republic',
    'New Zealand', 'Spain', 'Mauritania', 'Uganda', 'Argentina', 'Malta', 'Algeria', 'Sudan', 'Brunei', 'Ukraine', 'Panama',
    'Kuwait', 'Croatia', 'Moldova', 'Iraq', 'Georgia', 'Belize', 'Bahamas', 'Monaco', 'Afghanistan', 'Liechtenstein',
    'Poland', 'Canada', 'Morocco', 'Eritrea', 'Saudi Arabia', 'Uruguay', 'Iceland', 'San Marino', 'Uzbekistan', 'United States',
    'Peru', 'Angola', 'Bosnia and Herzegovina', 'Mongolia', 'Malaysia', 'Mozambique', 'Ghana', 'Vanuatu', 'Yemen', 'Armenia',
    'Jamaica', 'Nepal', 'Qatar', 'Albania', 'Barbados', 'Venezuela', 'Madagascar', 'Indonesia', 'Lithuania', 'Cameroon',
    "Cote d'lvoire", 'North Korea', 'Australia', 'Namibia', 'Niger', 'Gambia', 'Botswana', 'Gabon', 'Pakistan',
    'Sao Tome & Principe', 'Lesotho', 'Sri Lanka', 'Brazil', 'Burkina Faso', 'North Macedonia', 'Slovenia', 'Nigeria',
    'Mali', 'Samoa', 'Guinea-Bissau', 'Romania', 'Malawi', 'Chile', 'Latvia', 'Kazakhstan', 'Zambia', 'Saint Lucia',
    'Palau', 'Guatemala', 'Ecuador', 'Syria', 'Netherlands', 'Bahrain', 'Senegal', 'Cambodia', 'Bangladesh', 'Chad',
    'Somalia', 'Zimbabwe', 'China', 'Equatorial Guinea', 'Trinidad and Tobago', 'Estonia', 'Timor-Leste', 'Guinea',
    'Rwanda', 'Mexico', 'Mauritius', 'Japan', 'Benin', 'Cyprus', 'Kiribati', 'Burundi', 'Tunisia', 'Tuvalu', 'Bolivia',
    'Eswatini', 'Belgium', 'Ethiopia', 'Haiti', 'Cuba', 'Grenada', 'South Sudan', 'St. Vincent & Grenadines', 'Philippines',
    'Dominican Republic', 'Nauru', 'Czech Republic', 'Tonga', 'Greece', 'Egypt', 'Jordan', 'Portugal', 'Azerbaijan',
    'Sweden', 'India'];
console.log(listOfCountries.length);
console.log(listOfCountries);
 */

/*
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of
// temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temperature amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do? Answer: just ignore,

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temperatures array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {

    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i]
        if (typeof curTemp !== 'number') continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? Answer: No! Just merge two arrays

// 2) Breaking up into sub-problems
// - How to merge two arrays?

const calcTempAmplitudeNew = function (t1, t2) {
    // const array1 = ['a', 'b', 'c'];
    // const array2 = ['d', 'e', 'f'];
    // const array3 = array1.concat(array2);

    const temps = t1.concat(t2);
    console.log(temps);

    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i]
        if (typeof curTemp !== 'number') continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
 */
/*
const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'cels',

        // C) FIX
        // value: Number(prompt('Degrees celsius:'))
        value: 10
    }

    // B) FIND
    console.table(measurement);

    console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin;
}
// A) IDENTIFY
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {

    const temps = t1.concat(t2);
    console.log(temps);

    let max = 0;
    let min = 0;

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i]
        if (typeof curTemp !== 'number') continue;

        // debugger;
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug);
 */

// Challenge 1
/*
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!

Test data:
Data 1: [17, 21, 23]
Data 2: [12, 5, -5, 0, 4]

GOOD LUCK
 */
/*
const temps1 = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];
const printForecast = function (arr) {
    let str = ``;
    for (let i = 0; i < arr.length; i++) {
        str += ` ... ${arr[i]}ºC in ${i + 1} days`;
    }
    return console.log(str + ` ...`);
};
printForecast(temps1);
printForecast(temps2);
 */
