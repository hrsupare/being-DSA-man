/* Example 1:
Input:

n = 5,m = 5.
arr1[] = {1,2,3,4,5}  
arr2[] = {2,3,4,4,5}
Output:

 {1,2,3,4,5}

Explanation: 

Common Elements in arr1 and arr2  are:  2,3,4,5
Distnict Elements in arr1 are : 1
Distnict Elemennts in arr2 are : No distinct elements.
Union of arr1 and arr2 is {1,2,3,4,5} 

Example 2:
Input:
n = 10,m = 7.
arr1[] = {1,2,3,4,5,6,7,8,9,10}
arr2[] = {2,3,4,4,5,11,12}
Output:
 {1,2,3,4,5,6,7,8,9,10,11,12}
Explanation:
 
Common Elements in arr1 and arr2  are:  2,3,4,5
Distnict Elements in arr1 are : 1,6,7,8,9,10
Distnict Elemennts in arr2 are : 11,12
Union of arr1 and arr2 is {1,2,3,4,5,6,7,8,9,10,11,12 */

/* 
function UnionofTwoSortedArrays(array1, array2) {
    let resArray = []
    let set = new Set()
    for (let i = 0; i < array1.length; i++) {
        set.add(array1[i])
    }
    for (let i = 0; i < array2.length; i++) {
        set.add(array2[i])
    }
    set.forEach((ele) => {
        resArray.push(ele)
    })
    return resArray
} */

/* function UnionofTwoSortedArrays(array1, array2) {
    let resArray = []
    let startArray1 = 0
    let startArray2 = 0

    while (startArray1 < array1.length && startArray2 < array2.length) {
        if (array1[startArray1] < array2[startArray2]) {
            resArray.push(array1[startArray1])
            startArray1++
        } else {
            resArray.push(array2[startArray2])
            startArray2++
        }
    }
    while (startArray1 < array1.length) {
        resArray.push(array1[startArray1])
        startArray1++
    }
    while (startArray2 < array2.length) {
        resArray.push(array2[startArray2])
        startArray2++
    }
    let start = 0;
    while (start < resArray.length) {
        if (resArray[start] === resArray[start + 1]) {
            resArray.splice(start, 1)
        } else {
            start++
        }
    }
    return resArray
} */

function UnionofTwoSortedArrays(array1, array2) {
    let resArray = []
    let i = 0
    let j = 0

    while (i < array1.length && j < array2.length) {
        if (array1[i] <= array2[j]) {
            if (resArray[resArray.length - 1] !== array1[i]) {
                resArray.push(array1[i])
            }
            i++
        } else {
            if (resArray[resArray.length - 1] !== array2[j]) {
                resArray.push(array2[j])
            }
            j++
        }
    }

    while(i < array1.length){
        if (resArray[resArray.length - 1] !== array1[i]) {
            resArray.push(array1[i])
        }
        i++

    }
    while( j < array2.length){
        if (resArray[resArray.length - 1] !== array2[j]) {
            resArray.push(array2[j])
        }
        j++

    }
    

    return resArray
}
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [2, 3, 4, 4, 5, 8]

console.log(UnionofTwoSortedArrays(arr1, arr2))