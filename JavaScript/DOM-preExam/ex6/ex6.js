main()

function createNewButton() {
    let button = document.createElement("button")
    button.setAttribute("onclick","changeText()")
    button.innerText = "change"
    document.body.appendChild(button)
}

function changeText() {
    //console.log(td.innerText)
}

function main() {
    //createNewButton()
    let table = document.getElementById("Taula")
    let trList = table.getElementsByTagName("tr")
    for (let i=0; i<trList.length; i++){
        let tdList = trList[i].getElementsByTagName("td")
        for (let d=0; d<tdList.length; d++){
            tdList[d].addEventListener("click",readEvent)
            tdList[d].setAttribute("id", `${i}${d}`)
        }
    }
}

function readEvent(event) {
    //obtengo el td que queremos modificar desde la propiedad array
    console.log(event)
    let td = event.path[0]
    console.log(td)
    td.innerText = ""
    //creo nuevo elemento input
    let inputText = document.createElement("input")
    inputText.setAttribute("id", "inputText"+td.getAttribute("id"))
    inputText.setAttribute("type", "text")
    inputText.setAttribute("onfocusout", "changeText()")
    //agrego nuevo elemento a el td que queremos modificar
    td.appendChild(inputText)
    console.log(td.innerText)
}
