const codigo = [];
const maxIntento = 8;

codigoSecreto();

/*1. Genera una constante CODIGO_SECRETO de tipo array de 5 número aleatorios
entre 0 y 9 usando la libreria Math.random();*/
function codigoSecreto() {
    for (let i = 0; i < 5; i++) {
        codigo[i] = Math.floor((Math.random() * 10));
    }
    console.log(codigo)
}

/* Compara el numero ingrsado por el usuario
   con el codigo secreto
 */
function comprobar() {
    let inputUserNum = document.getElementById("numero").value
    let inputUserArray = numToArray(inputUserNum)
    console.log(inputUserArray)
    let comparedResult = compareTheArrays(codigo,inputUserArray)
    result(comparedResult)
}

/*
result TODO (colocar los valores en sus casilleros)
 */
function result(comparedResult) {
    let resultSection = document.getElementById("Result")
    let divw100Array = resultSection.getElementsByClassName("rowResult w100 flex wrap")
    //TODO esto es sin index
    for (let divw100ArrayElement of divw100Array) {
        console.log(divw100ArrayElement) //elemento fila
        let divW20Array = divw100ArrayElement.getElementsByClassName("w20")
        for (let divW20ArrayElement of divW20Array) {
            console.log(divW20ArrayElement.textContent) //elemento celda
        }
    }
    //TODO esto es con index
    for (let ir=0; ir<divw100Array.length; ir++){
        let divW20Array2 = divw100Array[ir].getElementsByClassName("w20")
        for (let ic=0; ic<divW20Array2.length; ic++) {
            divW20Array2[ic].textContent = comparedResult[ic] //TODO coloca el valor en la celda pero
            // falta implmentarlo fuera del 1er for, dependinedp de el numero de turno
            console.log(divW20Array2[ic].textContent) //elemento celda
        }
    }
    //TODO esto es para crear el mismo elemento fila completa, implementarlo en otra función
    let clonedDiv = divw100Array[0].cloneNode(true)
    console.log(clonedDiv)
    resultSection.appendChild(clonedDiv)
}

/*
crea un array con los digitos del numero ingresado por el usuario
 */
function numToArray(num) {
    let obtainedArray = []
    while (num > 0){
        obtainedArray.unshift(num % 10)
        num = Math.floor(num / 10)
    }
    return obtainedArray
}

/*
Compara ambos arrays y va llamando a la función para
contar la cantidad de veces que aparece un dígito
 */
function compareTheArrays(code,inputCode) {
    let compareResult = inputCode
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







