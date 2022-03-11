console.log(main())

function main() {
    //codigo secreto
    let codigoSecreto = getSecretCode()
    console.log(codigoSecreto)
    
    /*
    //ingreso numero
    let userInputNumber = prompt("Ingresá un número entero:")
    let numberTimes = numberTimesInArray(codigoSecreto,userInputNumber)
    console.log(numberTimes)
    //ingreso posición
    let userInputPosition = prompt("Ingresá su posición:")
    let indicatedPosition = verifyPosition(codigoSecreto,userInputNumber,userInputPosition)
    console.log(indicatedPosition)
    */

    //pido a usuario un número por cada elemento del array
    let userSecretCode = inputsUser(codigoSecreto)
    console.log(userSecretCode)

    //verifico comparando las listas
    console.log(compareArrays(codigoSecreto,userSecretCode))
    
    
}

function getSecretCode() {
    let secretCode = []
    while (secretCode.length < 5) {
        let randomInt = Math.floor(Math.random()*10)
        secretCode.push(randomInt)
    }
    return secretCode
}

function numberTimesInArray(secretCode,numberToSearch) {
    let count = 0
    for (let i = 0; i < secretCode.length; i++) {
        if (secretCode[i] == numberToSearch) {
            count++
        }
    }
    return count
}

function verifyPosition(secretCode,numberToSearch,indicatedPosition) {
    for (let i = 0; i < secretCode.length; i++) {
        if (secretCode[i] == numberToSearch && i == indicatedPosition) {
            return true
        }
    }
    return false
}

function inputsUser(pcSecretCode) {
    let userSecretCode = []
    for (let i = 0; i < pcSecretCode.length; i++) {
        const userInput = prompt("Ingresá el número de la posición ${i}:")
        userSecretCode.push(userInput)
        
    }
    return userSecretCode
}

function compareArrays(pcSecretCode,userSecretCode) {
    let compareResult = []
    for (let iPc = 0; iPc < pcSecretCode.length; iPc++) {
        for (let iU = 0; iU < userSecretCode.length; iU++) {
            if (iPc == iU && userSecretCode[iU] == pcSecretCode[iPc]) {
                compareResult.push("Ok")
            } else {
                compareResult.push(numberTimesInArray(pcSecretCode,userSecretCode[iU]))
            }   
        }
    }
    return compareResult
}