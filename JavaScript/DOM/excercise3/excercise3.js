function changeBackground() {
    let elementsToChange = document.getElementsByTagName("p")

    for (let i = 0; i < elementsToChange.length; i++){
        elementsToChange[i].style.backgroundColor = "green"
    }

}