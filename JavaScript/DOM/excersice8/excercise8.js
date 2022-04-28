main()

function main() {
    let select = document.getElementById("select")
    //al poner evento "change" tiene un error y es que el último elemento que deje en la dropDownList no podrá seleccionarse nunca
    select.addEventListener("change",function (){
        selectedOption = this.options[select.selectedIndex]
        console.log(selectedOption)
    })
}

function deleteSport() {
    selectedOption.remove()
}