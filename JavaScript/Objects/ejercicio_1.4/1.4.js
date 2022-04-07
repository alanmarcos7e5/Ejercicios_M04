main()

function main() {
    let rangeNumbers = rangeOfNumbers()
    console.log(rangeNumbers)
    //console.log(specialNumber('153'))
}

function specialNumber(stringNumber) {
    let sum = 0

    for (let i = 0; i < stringNumber.length; i++) {
        let charNumber = stringNumber[i];
        let qubic = Math.pow(charNumber,3)
        sum += qubic
    }

    if (sum == stringNumber) return true
    return false
}

function rangeOfNumbers() {
    let rangeNumbers = []
    for (let i = 0; i <= 10000; i++) {
        let strI = i+''
        if (specialNumber(strI)) rangeNumbers.push(strI)
    }
    return rangeNumbers
}