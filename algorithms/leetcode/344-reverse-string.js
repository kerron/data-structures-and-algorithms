/*
Write a function that reverses a string. The input string is given as an array of characters s.
 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.
 

Follow up: Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
*/

let arr = ["h", "e", "l", "l", "o"];

// T: O(n), S: O(1)
const reverseString = (str) => {
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    let temp = str[i];

    str[i++] = str[j];
    str[j--] = temp;
  }
  return str;
};

console.log(reverseString(arr)); // ["o", "l", "l", "e", "h"]
