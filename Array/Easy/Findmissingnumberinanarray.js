


const arr = [9,6,4,2,3,5,7,0,1]
/* const Findmissingnumberinanarray = (array) => {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let char = array.length * (array.length + 1) / 2
    return char - sum
} */


const Findmissingnumberinanarray = (array) => {
    const sortedArray = array.sort((a, b) => a - b)

    for (let i = 0; i <= sortedArray.length; i++) {
        if (sortedArray[i] !== i) {
            return i
        }
    }
}






console.log(Findmissingnumberinanarray(arr))