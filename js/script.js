"use strict";

let i;
let fibonacciArr = [0, 1];

for (let i = 2; i <= 15; i++) {
    fibonacciArr[i] = fibonacciArr [i - 2] + fibonacciArr [i - 1];
    console.log(fibonacciArr[i]);
}



