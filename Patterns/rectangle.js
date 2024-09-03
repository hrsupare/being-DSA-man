function printRectangle(h, w) {
    for (let i = 0; i < h; i++) {
        let temp = ""
        for (let j = 0; j < w; j++) {
            temp += "* "
        }
        console.log(temp)
    }
}

printRectangle(5, 10)