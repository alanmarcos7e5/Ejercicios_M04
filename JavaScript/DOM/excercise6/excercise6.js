main()

function main() {

    let newInputButton = document.createElement("input")//creo input button
    newInputButton.setAttribute("id", "button")
    newInputButton.setAttribute("type", "button")
    newInputButton.setAttribute("onclick", "changeText()")
    newInputButton.setAttribute("value", "Change")
    newInputButton.style.visibility = "hidden"
    document.body.appendChild(newInputButton)

    let listOfCellsTag = document.getElementsByTagName("td")

    for (let i=0; i<listOfCellsTag.length; i++) {
        let myCell = listOfCellsTag[i]
        myCell.addEventListener("click",editInnerText);
    } 
}

function editInnerText(myEvent) {
    console.log(myEvent)
    //el evento tiene una propiedad path que guarda en un array
    //el camino de elementos html hasta llegar al elemento en cuestión. path[0] es el primer elemento del array,
    //es el elemento td que queremos trabajar
    //declaro myElement como global para poder usarla en otra función
    myElement = myEvent.path[0]

    let newInputText = document.createElement("input")//creo input text
    newInputText.setAttribute("type","text")
    newInputText.setAttribute("id","inputText")

    let inputButton = document.getElementById("button")
    inputButton.style.visibility = "visible"

    console.log(newInputText)
    myElement.innerText = ""
    myElement.appendChild(newInputText)
}

function changeText() {
    console.log("desde changeText")
    let cellValue = document.getElementById("inputText").value
    console.log(cellValue)
    console.log(myElement.innerText)
    myElement.innerText = cellValue
}
