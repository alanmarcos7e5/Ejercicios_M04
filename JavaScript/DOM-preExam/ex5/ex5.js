function insertRow() {
    let table = document.getElementById("Taula")
    let newRow = createRow(table)
    table.appendChild(newRow)
}

function createRow(table) {
    let trList = table.getElementsByTagName("tr")
    let lastTr = trList.length
    let newRow = trList[0].cloneNode(true)
    let newTdList = newRow.getElementsByTagName("td")

    for (let i=0; i<newTdList.length; i++){
        newTdList[i].innerText = `fila ${lastTr+1} celda ${i+1}`
    }
    console.log(newTdList[0])
    return newRow
}
