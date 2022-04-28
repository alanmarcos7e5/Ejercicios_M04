//calculateVolume()
function calculateVolume() {
    let formulary = document.form1
    let h = formulary.h.value
    let volume = Math.PI * Math.pow(h/2, 2) * h
    showResult(volume)
}

function showResult(volume) {
    let result = document.createElement("p")
    result.innerText = "Volumen: " + volume
    document.body.appendChild(result)
}