// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    var reverseStr = ''

    for(var i = str.length; i >= 0; i--) {
        reverseStr += str.charAt(i)
    }

    return reverseStr

}

module.exports = reverse;
