/*
Crea un fitxer html complert amb diversos paràgrafs. i un botó. Crea un fitxer .js i
fes-lo enllaçar amb el fitxer html. Fes que en fer clic en el botó es modifiqui el color
de fons dels paràgrafs. Fes que els paràgrafs no tinguin id.
 */
main()

function main() {
    let bodyElement = document.getElementsByTagName("body")[0]
    let qty = prompt("How many paragrapsh do you want?")
    createNewElement(bodyElement, qty)
}

function createNewElement(bodyElement, qnty) {
    for (let q=0; q<qnty; q++){
        let paragraph = document.createElement("p")
        paragraph.innerText = `Paragraph number ${q}`
        bodyElement.appendChild(paragraph)
    }
    let buttonElement = document.createElement("button")
    buttonElement.innerText = "Change color"
    buttonElement.setAttribute("onclick", "changeColor()")
    bodyElement.appendChild(buttonElement)
}

function changeColor() {
    let paragraphsList = document.body.getElementsByTagName("p")
    for (let i=0; i<paragraphsList.length; i++){
        paragraphsList[i].style.backgroundColor = "blue"
        paragraphsList[i].style.color = "white"
    }
}
