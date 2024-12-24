const n = 33;
const x = 23;

// الف //

let p = [];

for (let i = 3; i <= n; i++ ){
    let fraction = 1 / i;
    p.push(fraction);

}

const total= p.reduce(sum);

function sum(acc, element){
    return acc + element;
}

console.log(total);