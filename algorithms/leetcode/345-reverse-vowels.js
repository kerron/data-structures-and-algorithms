/*
  https://leetcode.com/problems/reverse-vowels-of-a-string/

  Given a string s, reverse only all the vowels in the string and return it.

  The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

  Example 1:

  Input: s = "hello"
  Output: "holle"

  Example 2:

  Input: s = "leetcode"
  Output: "leotcede"
*/

const reverseVowels = (s) => {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  let chars = s.split("");
  let i = 0,
    j = chars.length - 1;

  while (i < j) {
    while (i < j && !vowels.has(chars[i])) {
      i++;
    }
    while (i < j && !vowels.has(chars[j])) {
      j--;
    }

    const temp = chars[i];
    chars[i++] = chars[j];
    chars[j--] = temp;
  }

  return chars.join("");
};

console.log(reverseVowels("leetcode")); //leotcede
