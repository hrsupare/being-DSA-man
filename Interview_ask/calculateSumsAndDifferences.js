// Write a function that takes an array of numbers and calculates:
// The sum of the first and last elements, the second and second-last elements, and so on.
// The difference of the first and last elements, the second and second-last elements, and so on.
// If the array has an odd length, the middle element should be added to itself in the sum and subtracted by itself (resulting in 0) in the difference.

function calculateSumsAndDifferences(arr) {
  let left = 0;
  let right = arr.length - 1;
  const sumResults = [];
  const differenceResults = [];

  while (left < right) {
    sumResults.push(arr[left] + arr[right]);
    differenceResults.push(arr[left] - arr[right]);
    left++;
    right--;
  }

  // Handle middle element for odd-length arrays
  if (arr.length % 2 !== 0) {
    sumResults.push(arr[left] * 2); // Adding the middle element twice
    differenceResults.push(0); // Middle element - itself is always 0
  }

  console.log(sumResults, "Sum Results");
  console.log(differenceResults, "Difference Results");
}

const numbers = [1, 2, 3, 4, 5, 6];
calculateSumsAndDifferences(numbers);
