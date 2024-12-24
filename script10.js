//tamrin 10//

const primeNumbers = [];

for (let i = 2; i <= 1000; i++) {
    let isPrime = true;

    if (i <= 3) {
        primeNumbers.push(i);
        continue; 
    }

    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        primeNumbers.push(i);
    }
}

console.log(primeNumbers);
