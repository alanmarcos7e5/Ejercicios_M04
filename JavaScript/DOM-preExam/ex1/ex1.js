var backToNormal = false
function stylejs() {
    let paragraph = document.getElementsByTagName("p")
    if (backToNormal) {
        for (let i = 0; i < paragraph.length; i++) {
            paragraph[i].style.fontStyle = "normal"
        }
        backToNormal = false
    } else {
        for (let i = 0; i < paragraph.length; i++) {
            paragraph[i].style.fontStyle = "oblique"
        }
        backToNormal = true
    }
}