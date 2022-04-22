
main()

function main() {
    var listOfCellsTag = document.getElementsByTagName("td")

    for (let i=0; i<listOfCellsTag.length; i++) {
        let myCell = listOfCellsTag[i]
        myCell.addEventListener("click",editInnerText);
    } 
}

function editInnerText(myEvent) {
    console.log("desde edit")
    console.log(myEvent.path[0].innerText)
    myEvent.path[0].innerText = "cambiarevent"
}

