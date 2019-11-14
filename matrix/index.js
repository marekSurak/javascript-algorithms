// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let startRow = 0
    let startCol = 0
    
    let endRow = n - 1
    let endCol = n - 1

    let counter = 1

    const result = []

    for(var i = 0; i < n; i++) {
        result.push([])
    }

    while(startRow <= endRow && startCol <= endCol) {
        
        //prvy riadok
        for (var i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter
            counter++
        }

        startRow++

        //posledny stlpec
        for(var i = startRow; i <= endRow; i++) {
            result[i][endCol] = counter
            counter++
        }

        endCol--

        //posledny riadok
        for(var i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter
            counter++
        }

        endRow--

        //prvy stlpec
        for(var i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter
            counter++
        }

        //zacneme o stlpec dalej
        startCol++
    }

    return result
}

module.exports = matrix;
