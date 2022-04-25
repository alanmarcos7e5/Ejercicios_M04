main()
function main() {
    let rows = prompt("Cantidad de filas")
    let columns = prompt("Cantidad de columnas")
    createNewRow(rows,columns)//TODO change name of function to clarify
    //table.appendChild(creteNewRow(rows,columns))
}

function createNewRow(rows, columns) {
    let table = document.getElementById("table1")
    for (let i=0; i<rows; i++){
        let newRow = document.createElement("tr")
        for (let c=0; c<columns; c++){
            let newColumn = document.createElement("td")
            newRow.appendChild(newColumn)
        }
        table.appendChild(newRow)//TODO gives an error of appendChild(null value)
    }

}

