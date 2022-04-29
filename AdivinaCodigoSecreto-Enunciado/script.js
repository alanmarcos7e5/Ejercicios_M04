const codigo = [];
const maxIntento = 3;
var turn = 0

codigoSecreto()
cloneRow()

/*1. Genera una constante CODIGO_SECRETO de tipo array de 5 número aleatorios
entre 0 y 9 usando la libreria Math.random();*/
function codigoSecreto() {
    for (let i = 0; i < 5; i++) {
        codigo[i] = Math.floor((Math.random() * 10));
    }
    console.log(codigo)
}

/*
Crea todos los bloques de result necesarios segun los turnos
 */
function cloneRow() {
    let resultSection = document.getElementById("Result")
    let completeRow = resultSection.getElementsByClassName("rowResult w100 flex wrap")
    let i = 1
    while (i < maxIntento){
        let clonedRow = completeRow[0].cloneNode(true)
        resultSection.appendChild(clonedRow)
        i++
    }
}

/* Compara el numero ingrsado por el usuario
   con el codigo secreto
 */
function comprobar() {
    let inputUserNum = document.getElementById("numero").value
    document.getElementById("numero").focus() //TODO que el foco se coloque al final
    let inputUserArray = Array.from(inputUserNum)
    let comparedResult = compareTheArrays(codigo,inputUserArray)

    console.log(inputUserArray)

    result(inputUserArray, comparedResult)
    if (checkArrays(comparedResult)) finishGame(true)
    turn++
    if (turn == maxIntento) finishGame(false)
}

/*
result //TODO ver de aprovechar codigo
 */
function result(inputUser,comparedResult) {
    let resultSection = document.getElementById("Result")
    let completeRow = resultSection.getElementsByClassName("rowResult w100 flex wrap")
    //Itera sobre los div padre y modifica valor de div hijo y de div padre
    let divArray = completeRow[turn].getElementsByClassName("w20")
    for (let i = 0; i < divArray.length; i++) {
        let digit = divArray[i]
        digit.text = comparedResult[i] //al div padre del div result, le agrego el resultado de la comparación
        //para saber si aparece o no el numero o si es correcto
        console.log(digit.text)
        let divWithResult = digit.getElementsByClassName("celResult flex")[0] //con index 0 llamo
        //al único div hijo que tiene
        divWithResult.innerText = inputUser[i]
        //comprobar repeticion del digito para colocar colores
        if (digit.text == "ok") divWithResult.style.backgroundColor = "green"
        else if (digit.text != "0") divWithResult.style.backgroundColor = "yellow"
    }
}
//TODO ver de aprovechar codigo
function resultFinish() {
    let resultSection = document.getElementById("codigo")
    let completeRow = resultSection.getElementsByClassName("w100 flex wrap")

    //Itera sobre los div padre y modifica valor de div hijo y de div padre
    let divArray = completeRow[0].getElementsByClassName("w20")
    for (let ie = 0; ie < divArray.length; ie++) {
        let digit = divArray[ie]
        console.log(digit.text)
        let divWithResult = digit.getElementsByClassName("cel flex")[0] //con index 0 llamo
        //al único div hijo que tiene
        divWithResult.innerText = codigo[ie]
    }
}


/*
A partir de un parámetro bool, realiza las configuraciones
necesarias de fin de partida
 */
function finishGame(result) {
    let infoToShow = document.getElementById("info")
    let btnComprobar = document.getElementById("check")
    btnComprobar.disabled = true
    btnComprobar.style.backgroundColor = "grey"
    if (result) infoToShow.textContent = "GANASTE!"
    else infoToShow.textContent = "Perdiste :(!"
    resultFinish()
}

/*
verifica que todos los elementos del array sean "ok"
si lo son retorna true
si no false
 */
function checkArrays(comparedResult) {
    let infoToShow = document.getElementById("info")
    for (let digit of comparedResult) {
        if (digit != "ok"){
            infoToShow.textContent = "Seguí participando"
            return false
        }
    }
    return true
}

/*
Compara ambos arrays y va llamando a la función para
contar la cantidad de veces que aparece un dígito
 */
function compareTheArrays(code,inputCode) {
    //let compareResult = inputCode //ojo, al modificar al parecer se modifica también inputCode
    let compareResult = Array.from(inputCode)
    for (let i = 0; i < inputCode.length; i++) {
        if (inputCode[i] == code[i]) {
            compareResult[i] = "ok"
        }else{
            compareResult[i] = numTimesInArray(code,inputCode[i])
        }
    }
    return compareResult
}

/*
Cuenta cantidad de veces que aparece un dígito
 */
function numTimesInArray(code,numberToSearch) {
    let count = 0
    for (let i = 0; i < code.length; i++) {
        if (code[i] == numberToSearch) {
            count++
        }
    }
    return count
}







