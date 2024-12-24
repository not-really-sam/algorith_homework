// tamrin 20 //

const fourDigitNumbers = [];

for (let i = 1000; i <= 9999; i++) {
    fourDigitNumbers.push(i);
}

const eachDigit = []; 

fourDigitNumbers.map(item => {
    eachDigit.push(item.toString().split('').map(Number));
});

const validNumbers = [];

eachDigit.forEach(object => {
    const [thousands, tens, hundreds, ones] = object;

    if (thousands % 2 !== 0 && tens % 2 !== 0 && hundreds % 2 === 0 && ones % 2 === 0) {
        validNumbers.push(object.join(""));
    }
});

console.log(validNumbers);