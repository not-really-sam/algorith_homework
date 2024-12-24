const n = 33;
const x = 23;

// ج //

let c = [];

for (let i = 1; i <= ((2*n)-1); i+=2 ){
    let power = x ** i / (i);
    c.push(power);

}

const answer= c.reduce(sum);

function sum(acc, element){
    return acc + element;
}

console.log(Math.sin(answer));