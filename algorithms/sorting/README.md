# Sorting Algorithms

## insertionSort
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


## mergeSort
// O(n log n)
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

## selectionSort
// O(n2)
const selectionSort = (items) => {
  for (let i = 0, len = items.length; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (items[j] < items[min]) {
        min = j;
      }
    }
    if (min !== i) {
      const temp = items[i];
      items[i] = items[min];
      items[min] = temp;
    }
  }

  return items;
};

selectionSort([12, 18, 14, 6, 10, 2, 8, 4, 16, 20]); // [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]
