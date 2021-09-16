// given an array of strings, return a compressed array version of this string

var compress = function (chars) {
  let i = 0,
    count = 1,
    str = [],
    len = chars.length;

  while (i <= len) {
    if (chars[i] !== chars[i + 1]) {
      count > 1 && str.push(`${count}`);
      str.push(chars[i]);
      count = 1;
    } else {
      count++;
    }

    i++;
  }

  return str;
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
// ["2", "a", "2", "b", "3", "c"]
