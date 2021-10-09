//   There are three types of edits that can performed on strings:
//   insert a character, remove a charachter, or replace a character.
//   Given two strings, write a function to check if they are one edit (or zero edits) away.

// Example:
//   pale, ple   -> true
//   pales, pale -> true
//   pale, bale  -> true
//   pale, bake  -> false

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
