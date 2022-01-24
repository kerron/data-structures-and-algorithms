const unsorted = [2, 8, 1, 6, 3, 7, 9, 0, 5, 4];

const merge = (left, right) => {
  const sortedList = [];

  while (left.length && right.length) {
    sortedList.push(left[0] > right[0] ? right.shift() : left.shift());
  }

  while (left.length) {
    sortedList.push(left.shift());
  }
  while (right.length) {
    sortedList.push(right.shift());
  }

  return sortedList;
};

const mergeSort = (list) => {
  if (list.length < 2) return list;
  const middle = Math.floor(list.length / 2);
  const listL = list.slice(0, middle);
  const listR = list.slice(middle, list.length);
  const left = mergeSort(listL);
  const right = mergeSort(listR);
  return merge(left, right);
};

mergeSort(unsorted); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
