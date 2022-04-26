main()
function main() {
    let rows = prompt("Cantidad de filas")
    let columns = prompt("Cantidad de columnas")
    createNewRows(rows,columns)
}

function createNewRows(rows, columns) {
    let table = document.getElementById("table1")
    for (let i=0; i<rows; i++){
        let newRow = document.createElement("tr")
        for (let c=0; c<columns; c++){
            let newColumn = document.createElement("td")
            newColumn.innerText = `Row ${i}, Column ${c}`
            newRow.appendChild(newColumn)
        }
        table.appendChild(newRow)
    }

}

