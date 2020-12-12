const a=[7,2,5,3,5,3];
const b=[7,2,5,4,6,3,5,3];
let D=[];
let del;

function missingNumbers(a,b){
    const n=a.length;

    for(let i=0; i<n; i++){
        if(a[i]!==b[i]){
            del=b.splice(i,1);
            D.push(del);
            i--;
        }
    }

return D;
}

const result = missingNumbers(a,b);
console.log(result);