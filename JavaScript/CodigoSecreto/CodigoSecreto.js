console.log(main())

function main() {
    //codigo secreto
    let codigoSecreto = getSecretCode()
    console.log(codigoSecreto)
    
    /*El bloque comentado tiene el código para ir respondiendo los ítems
    algunas líneas ya no son de utilidad.
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
/* //realizada para responder los primeros ítems, ya no es de utilidad
function verifyPosition(secretCode,numberToSearch,indicatedPosition) {
    for (let i = 0; i < secretCode.length; i++) {
        if (secretCode[i] == numberToSearch && i == indicatedPosition) {
            return true
        }
    }
    return false
} */

function inputsUser(pcSecretCode) {
    let userSecretCode = []
    for (let i = 0; i < pcSecretCode.length; i++) {
        const userInput = prompt(`Ingresá el número de la posición ${i}:`)
        userSecretCode.push(userInput)
        
    }
    return userSecretCode
}

function compareArrays(pcSecretCode,userSecretCode) {
    let compareResult = userSecretCode
    for (let iu = 0; iu < userSecretCode.length; iu++) {
        if (userSecretCode[iu] == pcSecretCode[iu]) {
            compareResult[iu] = "ok"
        }else{
            compareResult[iu] = numberTimesInArray(pcSecretCode,userSecretCode[iu])
        }
    }
    return compareResult
}