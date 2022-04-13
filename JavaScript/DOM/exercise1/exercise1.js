

function estiljs(){
    let textToChange = document.getElementById("text")
    console.log(window.getComputedStyle(textToChange).getPropertyValue("backgroundColor"))
    /*textToChange.style.fontStyle = "oblique"
    textToChange.style.color = "white"
    textToChange.style.backgroundColor = "blue"*/
}