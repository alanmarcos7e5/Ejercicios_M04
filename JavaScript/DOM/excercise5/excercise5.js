function agregarFila() {
    let table = document.getElementById("Taula") //obtengo la tabla existente
    let numberOfRows = table.getElementsByTagName("tr").length //obtengo la cant de filas que tiene
    let newRow = createRow(2, numberOfRows)
    table.appendChild(newRow) //le agrego la nueva fila, que adentro contendrá las dos columnas
}

function createRow(columns,numberOfRows) { //por parámetro le paso la cantidad de columnas que tendrá
    let newRow = document.createElement("tr") //creo elemento nueva fila
    for (let n=0; n<columns; n++){
        let newColumn = document.createElement("td") //creo columna y agrego a fila
        newColumn.innerHTML = `fila ${numberOfRows+1} celda ${n+1}`
        newRow.appendChild(newColumn)
    }
    return newRow //devuelve la fila con sus columnas como hijos
}


function intercaleRow() {
    let table = document.getElementById("Taula")
    let newRow = createRow(2,0)
    table.insertBefore(newRow,table.children[0]) //inserto nueva fila como primer hijo de la tabla o table.firstchild
    modifyValues(table) //falta implementar el cambio de los valores de los campos
}

function modifyValues(table) {
    //not implemented yet
}

function editValue() {
    //ejercicio 6
}