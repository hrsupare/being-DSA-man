/* Example 1:
Input:
[1,2,4,7,7,5]
Output:
Second Smallest : 2
   Second Largest : 5
Explanation:
The elements are as follows 1,2,3,5,7,7 and hence second largest of these is 5 and second smallest is 2

Example 2:
Input:
[1]
Output:
Second Smallest : -1
   Second Largest : -1
Explanation:
Since there is only one element in the array, it is the largest and smallest element present in the array. There is no second largest or second smallest element present.
*/

const secondLargestElementInAnArrayWithoutSorting = (array) => {
    let firstLargest = array[0];
    let secondLargest = -1;

    let firstSmallest = array[0]
    let secondSmallest = Infinity

    for (let i = 1; i < array.length; i++) {
        if (array[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = array[i]
        } else if (array[i] < firstLargest && array[i] > secondLargest) {
            secondLargest = array[i]
        }
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] < firstSmallest) {
            secondSmallest = firstSmallest
            firstSmallest = array[i]
        } else if ( array[i] > firstSmallest && array[i] < secondSmallest) {
            secondSmallest = array[i]
        }
    }
    return {"secondLargest" : secondLargest ,"secondSmallest":secondSmallest } 
   
};

console.log(secondLargestElementInAnArrayWithoutSorting([11, 11, 2, 1, 5, 7, 7]))
