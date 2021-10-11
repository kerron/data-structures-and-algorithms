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

### 1.5 One Away

There are three types of edits that can performed on strings: insert a character, remove a charachter, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

```js
// Example:
// pale, ple   -> true
// pales, pale -> true
// pale, bale  -> true
// pale, bake  -> false

// O(n)
const oneAway = (s1, s2) => {
  if (Math.abs(s1.length - s2.length) > 1) return false;

  const s1Obj = {};
  let diff = 0;

  for (let letter of s1) {
    s1Obj[letter] ? (s1Obj[letter] += 1) : (s1Obj[letter] = 1);
  }

  for (let letter of s2) {
    if (s1Obj[letter]) s1Obj[letter] -= 1;
  }

  for (let letter in s1Obj) {
    if (s1Obj[letter] !== 0) diff += s1Obj[letter];
    if (diff > 1) return false;
  }

  return true;
};

console.log(oneAway("pale", "ple")); // true
console.log(oneAway("pales", "pale")); // true
console.log(oneAway("pale", "bale")); // true
console.log(oneAway("pale", "bake")); // false
```

### 1.6 String Compression

Implement a method to perform basic string compression using the counts of repeated characters. For example, the string `aabccccaaa` would become `a2b1c5a3`. If the “compressed” string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a-z)

```js
// O(n)
const strCompress = (s) => {
  let i = 0,
    count = 1,
    str = [],
    len = s.length;

  while (i <= len) {
    if (s[i] !== s[i + 1]) {
      str.push(`${s[i]}${count}`);
      count = 1;
    } else count++;

    i++;
  }

  const compressed = str.join("");
  return compressed.length < len ? compressed : s;
};

console.log(strCompress("aabcccccaaa")); //a2b1c5a3
console.log(strCompress("heellooooooooooo")); //h1e2l2o11
console.log(strCompress("worllllldddd")); //w1o1r1l5d3
console.log(strCompress("worlld")); //worlld
```

### 1.8 Zero Matrix

Write an algorithm such that if an element in an M x N matrix is 0, it's entire row and column are set to 0.

```js
// T: O(m*n) S: O(1)
const zeroMatrix = (matrix) => {
  if (!matrix.length || !matrix[0].length) return [];

  const pos = [];

  for (let i = 0, len = matrix.length; i < len; i++) {
    for (let j = 0, len2 = matrix[i].length; j < len2; j++) {
      if (matrix[i][j] === 0) {
        pos.push(i, j);
      }
    }
  }

  if (!pos.length) return matrix;

  const [row, column] = pos;

  for (let i = 0, len = matrix.length; i < len; i++) {
    for (let j = 0, len2 = matrix[i].length; j < len2; j++) {
      if (i === row) {
        matrix[i][j] = 0;
      }
      if (j === column) {
        matrix[i][column] = 0;
      }
    }
  }

  return matrix;
};

/*
| 1 | 1 | 1 |     | 1 | 0 | 1 |
| 1 | 0 | 1 | ->  | 0 | 0 | 0 |
| 1 | 1 | 1 |     | 1 | 0 | 1 |
*/
console.log(
  zeroMatrix([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);

/*
| 0 | 1 | 1 |     | 0 | 0 | 0 |
| 1 | 1 | 1 | ->  | 0 | 1 | 1 |
| 1 | 1 | 1 |     | 0 | 1 | 1 |
*/
console.log(
  zeroMatrix([
    [0, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ])
);
```
