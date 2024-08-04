let array = [1, 0, 1, 1, 1, 0, 1]

let findMaxConsecutiveOnes = function (array) {
    let count = 0;
    let maxNumCount = 0;
    let start = 0;
    while (start < array.length) {
        if (array[start] === 1) {
            count++
        } else {
            count = 0
        }
        maxNumCount = Math.max(maxNumCount, count)
        start++
    }
    return maxNumCount
};

console.log(findMaxConsecutiveOnes(array), "findMaxConsecutiveOnes")