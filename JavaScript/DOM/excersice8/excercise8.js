main()

function main() {
    select = document.getElementById("select")
    //al poner evento "change" tiene un error y es que el último elemento que deje en la dropDownList no podrá seleccionarse nunca
    select.addEventListener("change",function (){
        selectedOption = this.options[select.selectedIndex]
        console.log(selectedOption)
    })
}
//ejercicio 8
function deleteSport() {
    selectedOption.remove()
}

//ejercicio 9
function viewElements() {
    for (let i=0; i<select.length; i++){
        if (i==0) console.log("este no")
        else alert(select[i].text)
    }
}
