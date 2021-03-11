'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function diagonalDifference(arr) {
    const d=arr[0].length;
    let FirstSum=0;
    let SecondSum=0;
    let Result=0;
    
    for(let i=0, j=d-1; i<d, j>-1; i++, j--){
        FirstSum+=arr[i][i];
        SecondSum+=arr[i][j];
    }
    Result=FirstSum-SecondSum;
    if(Result>=0){
        return Result;
    }else{
        if(Result<0){
            return (Result*(-1));
        }
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
