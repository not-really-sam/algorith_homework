//tamrin 6//

const n = 156;

const eachDigit = n.toString().split('').map(Number);

const total= eachDigit.reduce(sum);

function sum(acc, element){
    return acc + element;
}

if (n % total == 0) {
    console.log("yes! :D")
} else {
    console.log("no :(")
}