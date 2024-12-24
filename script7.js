//tamrin 7 //

const n = 156;
const m = 684;

let multiplesOfThree = [];

if (n < m) {
    for (let i = n; i<=m ; i++){
        if (i % 3 == 0){
            multiplesOfThree.push(i);
        }
    }
} else {
    for (let i = m; i<=n ; i++){
        if (i % 3 == 0){
            multiplesOfThree.push(i);
        }
    }
}

console.log(multiplesOfThree);
