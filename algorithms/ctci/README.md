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
