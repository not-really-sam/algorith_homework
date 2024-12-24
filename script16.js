//tamrin 16//

const shops = [
    { code: "A", sold: 300000 },
    { code: "B", sold: 650000 },
    { code: "C", sold: 410000 },
    { code: "D", sold: 10000 }
]

shops.map(item => {

    if (item.sold <= 500000) {
        console.log(item.code, " will be paid ", (item.sold * 3 / 100), "$")

    } else if (item.sold > 500000 && item.sold < 7000000) {
        console.log(item.code, " will be paid ", (item.sold * 5 / 100), "$")

    } else if (item.sold > 100000) {
        console.log(item.code, ":", (item.sold * 15 / 100))
    }
}
)

const mostSold = Math.max(...shops.map(item => item.sold));
let mostSoldShopName = "";

shops.map(item => {

    if ((item.sold) === mostSold) {
        mostSoldShopName = (item.code);
    }
})

console.log(mostSoldShopName, "sold the most products this year.")