//tamrin 19//

const n = 15602840;

const eachDigit = n.toString().split('').map(Number);

let evenNumbers = 0;
let oddNumbers = 0;
let zeroes = 0;

for (let i = 0; i <= eachDigit.length; i++){
    if ( eachDigit[i] === 0) {
        zeroes++ ;
    } else if ( eachDigit[i] % 2 === 0){
        evenNumbers++ ;
    } else {
        oddNumbers++ ;
    }
}

console.log( "there are", evenNumbers, "even number(s) n." );
console.log( "there are", oddNumbers, "odd number(s) n." );
console.log( "there are", zeroes, "zero(es) in n." );