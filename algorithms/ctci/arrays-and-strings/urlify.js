// Write a method to replace all spaces in a string with '%20'.
// You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.

// Note: strings in JS are immutable

// O(n)
const urlify = (str, strLen) => str.substring(0, strLen).replaceAll(" ", "%20");

console.log(urlify("Mr John Smith   ", 13));
console.log(urlify("Long     space             ", 14));
