// : [0,0,1,1,2,2]
/* const sortanarrayofzerosonesandtwos = (array) => {
    let sortedArray = []
    let one = 0;
    let two = 0;
    let zero = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 0) {
            zero++
        } else if (array[i] == 1) {
            one++
        } else {
            two++
        }
    }

    for (let i = 0; i < zero; i++) {
        sortedArray.push(0)
    }
    for (let i = 0; i < one; i++) {
        sortedArray.push(1)
    }
    for (let i = 0; i < two; i++) {
        sortedArray.push(2)
    }

    return sortedArray
}
 */



// 0 ==> swap mid with start and start++ mid++
// 1 ==> mid++
// 2 ==> swap mid with end and do end--  

const sortanarrayofzerosonesandtwos = (array) => {
    let start = 0;
    let mid = 0;
    let end = array.length - 1;

    while (mid <= end) {
        if (array[mid] == 0) {
            let temp = array[mid];
            array[mid] = array[start];
            array[start] = temp;
            start++;
            mid++;
        } else if (array[mid] == 1) {
            mid++;
        } else if (array[mid] == 2) {
            let temp = array[mid];
            array[mid] = array[end];
            array[end] = temp;
            end--; 
        }
    }
    return array
};

let nums = [1,2,0];

console.log(sortanarrayofzerosonesandtwos(nums));
