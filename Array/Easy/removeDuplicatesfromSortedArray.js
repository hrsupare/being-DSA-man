const removeDuplicatesfromSortedArray = (array) => {
  let start = 0;
  while (start < array.length) {
    if (array[start] == array[start + 1]) {
      array.splice(start, 1);
      start--;
    }
    start++;
  }
  return array;
};

// console.log(removeDuplicatesfromSortedArray([1, 1, 2]));

// ====================================================================

const removeDuplicatesfromSortedArray2 = (array) => {
  let i = 0;
  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  }
  return i + 1;
};
let array = [1, 1, 2];
console.log(removeDuplicatesfromSortedArray2(array));

console.log(array, "array");

/*    */
