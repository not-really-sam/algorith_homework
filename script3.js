// tamrin_3 //

let result= [];

for (let i = 1; i<=100; i++) {
    let number = i*9;
    result.push(number);
} 

console.log(result);

const total= result.reduce(sum);

function sum(acc, element){
    return acc + element;
}

console.log("the sum is: ",total);