//tamrin 8//

let n = 654;

const eachDigit = n.toString().split('').map(Number);
let newDigitArray = [];

eachDigit.forEach((item, index) => {
    let power = eachDigit.length - 1 - index;
    let newDigit = item * Math.pow(3, power);
    newDigitArray.push(newDigit);
});

const total = newDigitArray.reduce(sum);

function sum(acc, element) {
    return acc + element;
}

console.log(total);