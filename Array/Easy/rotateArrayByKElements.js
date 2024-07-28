/* Example 1:
Input: N = 7, array[] = {1,2,3,4,5,6,7} , k=2 , right
Output: 6 7 1 2 3 4 5
Explanation: array is rotated to right by 2 position .

Example 2:
Input: N = 6, array[] = {3,7,8,9,10,11} , k=3 , left 
Output: 9 10 11 3 7 8
Explanation: Array is rotated to right by 3 position. */


//FIRST APPROACH  ======================================

/* let rotateArrayByKElements = (array, k) => {
  let tempArray = [];

  for (let i = array.length - k; i < array.length; i++) {
    tempArray[tempArray.length] = array[i];
  }

  for (let i = array.length - k - 1; i >= 0; i--) {
    array[i + k] = array[i];
  }

  for (let i = 0; i < k; i++) {
    array[i] = tempArray[i];
  }
  return array;
};
 */
//SECOND APPROACH  ======================================

function reverse(array, start, end) {
    while (start <= end) {
        let temp = array[start]
        array[start] = array[end]
        array[end] = temp
        start++
        end--
    }
}

let rotateArrayByKElements = (array, k) => {
    let start = 0;
    let end = array.length - 1
    reverse(array, 0, array.length - k - 1)
    reverse(array, array.length - k, array.length - 1)
    reverse(array, start, end)
    return array
};

console.log(rotateArrayByKElements([1, 2, 3, 4, 5, 6, 7], 2));
