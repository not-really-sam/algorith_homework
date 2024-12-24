//tamrin 11//

const divisors = [];
const n = 100 ;

for (let i = 1 ; i<= n ; i++){
    if (i%4 === 0){
        divisors.push(i);
    }
}

console.log(divisors);
console.log("there are", divisors.length, "numbers divisible by 4,");

const sumOfDivisors = divisors.reduce(sum);

function sum(acc, element) {
    return acc + element;
}

console.log("and the sum of them is", sumOfDivisors, ":)")