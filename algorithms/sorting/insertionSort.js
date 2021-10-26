// Time O(n^2)
// Space O(n), O(1) auxilary
const insertionSort = (list) => {
  for (let i = 0, len = list.length; i < len; i++) {
    let j = i;

    while (j > 0 && list[j] < list[j - 1]) {
      let temp = list[j - 1];
      list[j - 1] = list[j];
      list[j] = temp;
      j = j - 1;
    }
  }

  return list;
};

insertionSort([5, 3, 2, 9, 8, 4, 7, 1, 6]); // [1,2,3,4,5,6,7,8,9]
