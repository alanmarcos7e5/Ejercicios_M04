let toggle = false;

function estiljs(){
    let textToChange = document.getElementById("text")
    toggle = !toggle
    if (toggle == true){
        textToChange.style.fontStyle = "italic"
        textToChange.style.color = "green"
        textToChange.style.backgroundColor = "yellow"
    }else{
        textToChange.style.fontStyle = "oblique"
        textToChange.style.color = "white"
        textToChange.style.backgroundColor = "blue"
    }

}