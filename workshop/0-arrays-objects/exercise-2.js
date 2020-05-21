// Exercise 2
// -------------------
const lateComers = ['Felicia', 'Charles', 'Terry'];
const earlyBirds = ['Ellen', 'Jerry', 'Jasmine'];

// You have two arrays above of people who arrived late to your party and
// people who arrived early.
// Create a new array that holds all of the party attendees and

// Write a program that will do the following:
// Output them in a tidy list from first to last arrival the console.

// NO for loops!

//MAKING THE COMBINED ARRAY OF PARTY PEOPLE.
const combinedArray = [];
earlyBirds.forEach( str => combinedArray.push(str));
lateComers.forEach( str => combinedArray.push(str));

//LOG THEM IN ORDER OF ARRIVAL
combinedArray.forEach(str => console.log(`${str} is attendee number ${combinedArray.indexOf(str) + 1}`));