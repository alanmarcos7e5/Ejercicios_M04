main()

function main() {
    console.log(containsString('la palabra'))
}

function containsString(word) {
    if (word.includes('as',0)) {
        return word
    }
    return 'as'+ word
}