// tamrin 9 //

const numbers = []
numbers.length = 90;

const indexPrinter = (item) => {
    return Array.from({ length: item.length }, (_, index) => index + 10);
    
};

const indexOfNumbers= indexPrinter(numbers);

indexOfNumbers.map(item => {
    if (item % 11 === 0){
        console.log(item)
    }
})