function printSquare(n) {
    for (let i = 0; i < n; i++) {
        let temp = ""
        for (let j = 0; j < n; j++) {
            temp += "* "
        }
        console.log(temp)
    }
}

printSquare(5)