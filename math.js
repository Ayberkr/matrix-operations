let rowsA = parseInt(prompt("Lütfen ilk matrisin satır sayısını girin:"));
let colsA = parseInt(prompt("Lütfen ilk matrisin sütun sayısını girin:"));

let A = [];
for(let i = 0; i < rowsA; i++) {
    A[i] = [];
    for(let j = 0; j < colsA; j++) {
        A[i][j] = parseInt(prompt(`Lütfen ilk matrisin (${i + 1},${j + 1}) elemanını girin:`));
    }
}

let rowsB = parseInt(prompt("Lütfen ikinci matrisin satır sayısını girin:"));
let colsB = parseInt(prompt("Lütfen ikinci matrisin sütun sayısını girin:"));

let B = [];
for(let i = 0; i < rowsB; i++) {
    B[i] = [];
    for(let j = 0; j < colsB; j++) {
        B[i][j] = parseInt(prompt(`Lütfen ikicini matrisin (${i + 1},${j + 1}) elemanını girin:`));
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