console.log("Dejamos traza de lo que hacemos");
alert("Abrimos un modal");

let nombre = "Alan"
let apellido = "Marcos"
let profesion = "Técnico"
let plantilla = nombre + " " + apellido + " es "+ profesion

console.log(plantilla)

function mostrarProfesion(name){
    console.log("Dentro de la función")
}
mostrarProfesion(nombre)