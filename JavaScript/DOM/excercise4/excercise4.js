function obtenirAtributs() {
    let myElement = document.getElementById("itb")
    let attributes = myElement.getAttributeNames()
    console.log(attributes)
    for (let i=0; i<attributes.length; i++){
        console.log(myElement.attributes[i])
    }
}