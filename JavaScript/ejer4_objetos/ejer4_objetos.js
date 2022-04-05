main()

function main() {
    let alumno = createObject() 
    
    let listAlumno = makeList(alumno)
    console.log(listAlumno)

    //borrar propiedad
    delete alumno.school
    console.log(makeList(alumno))

    //agregar propiedades y calcular edad
    console.log(calculateYears(alumno))
    
    console.log(makeList(alumno))
    
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

function calculateYears(alumno) {
    alumno.bornDay = new Date("1994/2/23")
    dateActual = new Date()
    let yearsDif = dateActual.getTime() - alumno.bornDay.getTime()
    alumno.edad = Math.round(yearsDif/(1000 * 60 * 60 * 24 * 365))
    return alumno.edad
}

