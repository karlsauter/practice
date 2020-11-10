
let a = [[1,2],
         [3,4]];
let b = [[1,2,3],
         [4,5,6]];
let c = [[1,2],
         [3,4],
         [5,6]];
let d = [[1,2,3],
         [ ,4,5,6],
         [ ,6]];

function printDiagonals(matrix) {
    let newMatrix = [];
    let x = matrix[0].length;
    let y = matrix.length;
    for(let i = y - 1, j = 0; j < x; i--, j = i > -1 ? 0 : j + 1) {
        let row = newMatrix.push([]) - 1;
        for(let k = i > 0 ? i : 0, l = j; k < y && l < x; k++, l++) {
            newMatrix[row].push(matrix[k][l]);
        }
    }
    return newMatrix;
}
        
console.log(printDiagonals(a).map( x => x.join('')));
console.log(printDiagonals(b).map( x => x.join('')));
console.log(printDiagonals(c).map( x => x.join('')));
console.log(printDiagonals(d).map( x => x.join('')));


function mapTranspose(matrix) {
    let newMatrix = [];
    let maxLength = matrix.reduce( (acc, x) => acc = x.length > acc ? x.length : acc, 0);

    for(let i = 0; i < maxLength; i++) {
        newMatrix[i] = matrix.map( y => y[i] )
    }

    return newMatrix;
}

console.log(mapTranspose(a));
console.log(mapTranspose(b));
console.log(mapTranspose(c));
console.log(mapTranspose(d));

//Transpose matrix in-place
function transpose(matrix) {
    let x = Math.max(...matrix.map( x => x.length));
    let y = matrix.length;
    let l = x > y ? x : y;

    //Make matrix square
    matrix.length = l;
    matrix.fill((new Array(l)), y)
    matrix.forEach( x => x.length = l);

    //Transpose
    for(let row = 1; row < matrix.length; row++)
        for(let col = 0; col < row; col++)
            [ matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]];

    //Switch lengths
    matrix.forEach( x => x.length = y);
    matrix.length = x;

    return matrix;
}

console.log(transpose(a));
console.log(transpose(b));
console.log(transpose(c));
console.log(transpose(d));
