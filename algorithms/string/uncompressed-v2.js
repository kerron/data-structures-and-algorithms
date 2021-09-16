/*
 * uncompress a string where a letter is repeated the amount of times by the number that follows.
 */

const uncompress = (s) => {
  if (s.length < 2) return s;

  const regX = /[a-z]/i;
  let lastNum = 1;
  let lastChar = s[0];
  let uncompressedArr = [];

  for (let i = 1, len = s.length; i <= len; i++) {
    if (regX.test(s[i]) || i === len) {
      let num = parseInt(s.slice(lastNum, i), 10);
      while (num) {
        uncompressedArr.push(lastChar);
        num--;
      }
      lastNum = i + 1;
      lastChar = s[i];
    }
  }

  return uncompressedArr.join("");
};

console.log(uncompress("c12a3t11"));
