/* Given a string, write a function to check if it is a permutation of a 
 * palindrome. A palindrome is a word or phrase that is the same forwards 
 * and backwards. A permutation is a rearrangement of letters. 
 * The palindrome does not need to be limited to just dictionary words.
 
 * Example 
 * Input: "Tact Coa"
 * Output: True
 * Explanation: Permutations are - "tact cat", "atco cta", etc.
 */

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

console.log(palindromePermutation("Taco coa")); // true
console.log(palindromePermutation("hello world")); // false
console.log(palindromePermutation("abc")); // false
