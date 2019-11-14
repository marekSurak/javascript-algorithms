// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    //spravim pole
    //zoradim ho
    //index posledneho vyskuty - index prveho vyskytu = pocet znakov

    const arr = str.split('').sort()
    let maxCount = 0
    let maxChar

    if (str.length == 1) {
        return str
    }

    for (character of arr) {
        let count = arr.lastIndexOf(character) - arr.indexOf(character) 
        maxChar = count > maxCount ? character : maxChar
    }

    return maxChar
}

module.exports = maxChar;
