function printHollowRectangle(h, w) {
    for (let i = 0; i < h; i++) {
        let temp = ""
        for (let j = 0; j < w; j++) {
            if (i === 0 || i === h - 1) {
                temp += "* "
            } else {
                if (j === 0 || j === w - 1) {
                    temp += "* "
                } else {
                    temp += "  "
                }
            }
        }
        console.log(temp)
    }
}


printHollowRectangle(3, 6)