//tamrin 12//


function range(start, end) {
    let array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}
const ourRange = range(1,1000);

let chosenIndex = Math.floor(Math.random() * ourRange.length);

console.log(chosenIndex);