# Cracking The Coding Interview

## Arrays and String

### 1.1 Is Unique

Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

```js
// O(n)
const isUnique = (str) => new Set(str).size === str.length;

console.log(isUnique("a string")); // true
console.log(isUnique("another string")); // false

// What if you cannot use additional data structures?
// n log n
const isUnique2 = (str) => {
  const sortedLetters = [...str].sort();
  for (let i = 0, len = sortedLetters.length - 1; i < len; i++) {
    if (sortedLetters[i] === sortedLetters[i + 1]) return false;
  }
  return true;
};

console.log(isUnique2("a string")); // true
console.log(isUnique2("another string")); // false;
```

### 1.2 Check permutation

Given two strings, write a method to decide if one is a permutation of the other.

```js
// O(n)
const checkPermutation = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  if (str1 === str2) return false;

  const str1Obj = {};

  for (letter of str1) {
    if (str1Obj[letter]) str1Obj[letter] += 1;
    else str1Obj[letter] = 1;
  }

  for (letter of str2) {
    if (!str1Obj[letter]) return false;
    str1Obj[letter] -= 1;
  }

  return true;
};

console.log(checkPermutation("hello", "olleh")); // true
console.log(checkPermutation("hollllo", "ollohhh")); // false
console.log(checkPermutation("world", "world")); // false
```

### 1.3 URLify

Write a method to replace all spaces in a string with `%20`. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.

Note: strings in JS are immutable

```js
// O(n)
const urlify = (str, strLen) => str.substring(0, strLen).replaceAll(" ", "%20");

console.log(urlify("Mr John Smith   ", 13));
console.log(urlify("Long     space             ", 14));
```

### 1.4 Palindrome Permutation

Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

```js
// Example
// Input: "Tact Coa"
// Output: True
// Explanation: Permutations are - "tact cat", "atco cta", etc.

//O(n)
const palindromePermutation = (str) => {
  const letterCount = {};
  let odds = 0;

  for (let i = 0, len = str.length; i < len; i++) {
    if (str[i] !== " ") {
      const l = str[i].toLowerCase();

      if (letterCount[l]) {
        letterCount[l] += 1;
      } else {
        letterCount[l] = 1;
      }
    }
  }

  for (letter in letterCount) {
    if (letterCount[letter] % 2 === 1) odds++;
    if (odds > 1) return false;
  }

  return true;
};

console.log(palindromePermutation("Taco Coa")); // true
console.log(palindromePermutation("hello world")); // false
console.log(palindromePermutation("abc")); // false
```
