/* Example 1:
Input:
 N = 5, array[] = {1,2,3,4,5}
Output:
 2,3,4,5,1
 */

const leftRotateTheArraybyOne = (array) => {
    if (array.length <= 1) {
        return array
    }
    let firstElement = array[0]
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i + 1]
    }
    array[array.length - 1] = firstElement;
    return array
}

console.log(leftRotateTheArraybyOne([1, 2]))