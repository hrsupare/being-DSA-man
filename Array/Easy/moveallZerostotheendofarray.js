/* Example 1:
Input:
 1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
Output:
 1 ,2 ,3 ,4 ,1 ,0 ,0 ,0 */

const moveallZerostotheendofarray = (array) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 0) {
      count++;
      array.splice(i, 1);
      i--;
    }
  }

  for (let i = 0; i < count; i++) {
    array.push(0);
  }

  return array;
};

console.log(moveallZerostotheendofarray([1, 0, 2, 3, 0, 4, 0, 1]));
