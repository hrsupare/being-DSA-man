/* const twoSumProblem = (array, target) => {
  let first = -1;
  let second = -1;
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        first = i;
        second = j;
      }
    }
  }
  return [first, second];
};
 */

/* 
//YES or NO case 
const twoSumProblem = (array, target) => {
    let sortedArray = array.sort((a, b) => a - b)

    let start = 0
    let end = sortedArray.length - 1

    while (start < end) {
        if (array[start] + array[end] < target) {
            start++
        } else if (array[start] + array[end] > target) {
            end--
        } else {
            return [start, end]

        }
    }
    return [-1 , -1]
};
 */

let array = [2, 6, 5, 8 , 11];
let target = 14;

const twoSumProblem = (array, target) => {
  let map = new Map();

  for (let i = 0; i < array.length; i++) {
    if (map.has(target - array[i])) {
      return [map.get(target - array[i]), i];
    } else {
      map.set(array[i], i);
    }
  }
 return [-1 , -1]
  console.log(map);
};

console.log(twoSumProblem(array, target));
