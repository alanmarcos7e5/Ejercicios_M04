
function editText() {
    let cells = document.getElementsByTagName("td")
    let listOfCells = []
    for (const cell in cells) {
        listOfCells.push(cell)
    }

    console.log(listOfCells)
}
