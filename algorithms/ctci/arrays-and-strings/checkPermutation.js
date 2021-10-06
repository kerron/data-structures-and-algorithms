//Given two strings, write a method to decide if one is a permutation of the other.

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
