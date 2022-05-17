/*
Agafa el fitxer de base DOMExercici2.html. Crea un fitxer .js i fes-lo enllaçar amb el
fitxer html. Fes que el fitxer .js prengui els valors del “nom” i “cognom” i els mostri per
la consola del navegador.
 */
function prenValorForm() {
    let formulary = document.getElementById("formulari1")
    let inputsLists = formulary.getElementsByTagName("input")
    let text = `Nombre: ${inputsLists[0].value} \n Apellido: ${inputsLists[1].value}`
    console.log(text)
}