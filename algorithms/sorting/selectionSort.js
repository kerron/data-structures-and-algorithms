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
