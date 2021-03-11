'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function miniMaxSum(arr) {
    let Sum=0;
    let Final=[];
    for(let i=0; i<arr.length; i++){
            Sum+=arr[i];
    }
    for(let j=0; j<arr.length; j++){
        Final.push(Sum-arr[j]);
    }
    
    let MinSum=Final[0];
    let MaxSum=Final[0];
    
    for(let k=0; k<Final.length; k++){
        if(Final[k]>MaxSum){
            MaxSum=Final[k];
        }
        if(Final[k]<MinSum){
            MinSum=Final[k];
        }
    }
    
    return console.log(MinSum,MaxSum);
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
