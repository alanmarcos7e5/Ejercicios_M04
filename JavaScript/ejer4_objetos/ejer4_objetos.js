main()

function main() {
    let alumno = createObject() 
    
    let listAlumno = makeList(alumno)
    console.log(listAlumno)

    //borrar propiedad
    delete alumno.school
    console.log(makeList(alumno))

    //agregar propiedad
    
    
}

//crea objeto
function createObject() {
    let estudiante = new Object()
    estudiante.name = "Alan"
    estudiante.school = "Damr1A"
    estudiante.surname = "Marcos"
    return estudiante
}

//hacer lista de propiedades de objeto con FORIN
function makeList(objeto) {
    let listOfProperties = []
    for (const propiedad in objeto) {
        listOfProperties.push(objeto[propiedad])
    }
    return listOfProperties
}

