/* Example 1:
Input:
 N = 5, array[] = {1,2,3,4,5}
Output
: True.
Explanation:
 The given array is sorted i.e Every element in the array is smaller than or equals to its next values, So the answer is True.

 Example 2:
 Input:
  N = 5, array[] = {5,4,6,7,8}
 Output
 : False.
 Explanation:
  The given array is Not sorted i.e Every element in the array is not smaller than or equal to its next values, So the answer is False.
 
 Here element 5 is not smaller than or equal to its future elements.
  */

const arr = [4, 6, 3, 7, 8];
const checkifAnArrayisSorted1 = (array) => {
  let status = true;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      status = false;
      break;
    }
  }
  return status;
};

console.log(checkifAnArrayisSorted1(arr));

// ==================================================================================================
 
function checkifAnArrayisSorted2(array) {
  let start = 0;
  let status = true;

  while (start < array.length) {
    if (array[start] > array[start + 1]) {
      status = false;
    }
    start++;
  }

  return status;
}


console.log(checkifAnArrayisSorted2(arr));


// 1752. Check if Array Is Sorted and Rotated
