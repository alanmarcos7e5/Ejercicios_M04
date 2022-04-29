function resaltar() {
    let strongWords = document.getElementsByTagName("strong")
    for (let strongWord of strongWords) {
        console.log(strongWord)
        wordColor = strongWord.style.color
        wordSize = strongWord.style.fontSize
        strongWord.style.color = "green"
        strongWord.style.fontSize = "2rem"
    }
}
function tornaNormal() {
    let strongWords = document.getElementsByTagName("strong")
    for (let strongWord of strongWords) {
        strongWord.style.color = wordColor
        strongWord.style.fontSize = wordSize
    }
}