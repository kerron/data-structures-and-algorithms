// Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabccccaaa would become a2b1c5a3.
// If the “compressed” string would not become smaller than the original string,
// your method should return the original string. You can assume the string has
// only uppercase and lowercase letters (a-z)

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

  return str.join("");
};

console.log(strCompress("aabcccccaaa")); //a2b1c5a3
console.log(strCompress("heellooooooooooo")); //h1e2l2o11
console.log(strCompress("worllllldddd")); //w1o1r1l5d3
