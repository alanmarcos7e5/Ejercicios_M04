main()

function main() {
    console.log(verifyLength('platano',3))
}

function verifyLength(word,number) {
    if (word.length >= number) {
        return word.replace(word[number],'')
    } else {
        return 'es más chico que el número'
    }
}