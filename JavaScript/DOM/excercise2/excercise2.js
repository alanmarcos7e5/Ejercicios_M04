function prenValorForm() { //TODO no mantiene el console log
    let formulary = document.getElementById("formulari1")
    let dataOfFormulary = formulary.getElementsByTagName("input")
    for (let i=0;i<dataOfFormulary.length;i++){
        console.log(dataOfFormulary.item(i))
    }
}