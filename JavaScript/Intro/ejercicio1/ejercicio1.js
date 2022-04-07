function multiply(value1,value2) {
    if (value2 == 0) {
        return 0
        console.log("en 0:",value2)
    } else {
        console.log("estamos en else de la func",value2)
        return value1 + multiply(value1 + (value2-1))
    }
}

var productRecursive = multiply(5,4)

console.log(productRecursive)
//no funciona