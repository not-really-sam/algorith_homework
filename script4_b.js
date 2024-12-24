const n = 33;
const x = 23;

// ب //

let s = [];

for (let i = 0; i <= n; i++ ){
    let power = x ** i;
    s.push(power);

}

const answer= s.reduce(sum);

function sum(acc, element){
    return acc + element;
}

console.log(answer);