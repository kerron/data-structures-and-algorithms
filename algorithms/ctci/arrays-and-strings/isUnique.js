// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

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
