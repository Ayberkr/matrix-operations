let rowsA = parseInt(prompt("Please enter the number of rows for the first matrix:"));
let colsA = parseInt(prompt("Please enter the number of columns for the first matrix:"));

let A = [];
for(let i = 0; i < rowsA; i++) {
    A[i] = [];
    for(let j = 0; j < colsA; j++) {
        A[i][j] = parseInt(prompt(`Please enter the (${i + 1},${j + 1}) element of the first matrix:`));
    }
}

let rowsB = parseInt(prompt("Please enter the number of rows for the second matrix:"));
let colsB = parseInt(prompt("Please enter the number of columns for the second matrix::"));

let B = [];
for(let i = 0; i < rowsB; i++) {
    B[i] = [];
    for(let j = 0; j < colsB; j++) {
        B[i][j] = parseInt(prompt(`Please enter the (${i + 1},${j + 1}) element of the second matrix:`));
    }
}

let C = new Array(rowsA);
for(let i = 0; i < rowsA; i++) {
    C[i] = new Array(colsB).fill(0);
    for(let j = 0; j < colsB; j++) {
        for(let k = 0; k < B.length; k++) {
            C[i][j] += A[i][k] * B[k][j];
        }
    }
}

let result = C;
document.getElementById("result").innerHTML = result;

console.log(C);
