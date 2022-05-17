/*
Agafa el fitxer de base DOMExercici4.html. Crea un fitxer .js i fes-lo enllaçar amb el
fitxer html. Fes que el fitxer .js prengui els atributs definits en l’enllaç html i els mostri
per la consola del navegador.
 */
function getAttributes() {
    let paragraph = document.getElementsByTagName("p")
    let anchorElement = paragraph[0].getElementsByTagName("a")
    console.log(anchorElement[0].attributes)
}