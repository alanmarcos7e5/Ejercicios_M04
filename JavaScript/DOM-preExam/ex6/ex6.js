main()

function createNewButton() {
    let button = document.createElement("button")
    button.setAttribute("onclick","changeText()")
    button.innerText = "change"
    document.body.appendChild(button)
}

function changeText() {
    //TODO no cambia el valor de la td
    //td.innerText = inputText.value
    /*td.value = inputText.innerText
    console.log(inputText)
    console.log(td)
    let tdList = document.getElementsByTagName("td")
    for (let i=0; i<tdList.length; i++){
        let input = document.getElementsByTagName("input")
        tdList[i].textContent = input[i].textContent
        console.log(tdList[i])
    }*/
}

function main() {
    createNewButton()
    let table = document.getElementById("Taula")
    let trList = table.getElementsByTagName("tr")
    for (let i=0; i<trList.length; i++){
        let tdList = trList[i].getElementsByTagName("td")
        for (let d=0; d<tdList.length; d++){
            tdList[d].addEventListener("click",readEvent)
        }
    }
}

function readEvent(event) {
    //obtengo el td que queremos modificar desde la propiedad array
    console.log(event)
    td = event.path[0]
    console.log(td)
    td.innerText = ""
    //creo nuevo elemento input
    inputText = document.createElement("input")
    inputText.setAttribute("type", "text")
    inputText.setAttribute("id", "inputText")
    //agrego nuevo elemento a el td que queremos modificar
    td.appendChild(inputText)
}
