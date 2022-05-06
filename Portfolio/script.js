let actual = false

function changeStyle() {
    if (actual) {
        changeBackground("blue")
        actual = false
    } else {
        changeBackground("aquamarine")
        actual = true
    }
}

function changeBackground(newColor) {
    let sectionToChange = document.getElementById("pages")
    let asideToChange = document.getElementById("profile")
    let footerToChange = document.getElementById("contact")
    
    let elementsToCHange = [sectionToChange,asideToChange,footerToChange]
    
    for (let index = 0; index < elementsToCHange.length; index++) {
        let element = elementsToCHange[index]
        element.style.backgroundColor = newColor
        console.log(newColor)
        
    }
    
}