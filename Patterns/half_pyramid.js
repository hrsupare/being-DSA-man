// *
// **
// ***

function printHalfPyramid(h) {
    for (let i = 0; i < h; i++) {
        let temp = ""
        for (let j = 0; j < i + 1; j++) {
            temp += "* "
        }
        console.log(temp)
    }
}

printHalfPyramid(67)