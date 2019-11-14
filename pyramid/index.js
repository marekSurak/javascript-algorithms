// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    var hashCounter = 1
    var totalCount = 1;

    for (var j = 1; j < n; j++) {
        totalCount += 2;
    }

    for(var i = 1; i <= n; i++) {
        console.log(' '.repeat((totalCount - hashCounter )/ 2) + '#'.repeat(hashCounter) + ' '.repeat((totalCount - hashCounter) / 2))
        hashCounter += 2
    }
}

module.exports = pyramid;
