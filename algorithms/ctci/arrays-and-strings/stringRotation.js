/*
 * Assume you have a method isSubstring which checks if one word is a substring
 * of another. Given two strings, s1 and s2, write code to check if s2 is a
 * rotation of s1 using only one call to isSubstring (e.g., "waterbottle" is a
 * rotation of "erbottlewat").
 *
 */

// O(n)
const isSubstring = (s1, s2) => {
  if (!s1 || !s2) return false;
  if (s1.length !== s2.length) return false;

  return (s1 + s1).includes(s2);
};

const a = "waterbottle";
const b = "bottlewater";
const c = "buttlewater";

console.log(isSubstring(a, b));
console.log(isSubstring(a, c));
