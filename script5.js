// tamrin 5 //

const staff = [
    { name: "person A", income: 9000 },
    { name: "person B", income: 1700000 },
    { name: "person C", income: 300000 },
    { name: "person D", income: 60000 }
]

staff.map(item => {

    if (item.income < 50000) {
        console.log("Moaf")

    } else if (item.income > 50000 && item.income < 100000) {
        console.log(item.name, ":", (item.income * 10 / 100))

    } else if (item.income > 100000) {
        console.log(item.name, ":", (item.income * 15 / 100))
    }
}
)
