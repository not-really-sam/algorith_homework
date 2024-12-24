//tamrin 17//

function getDateFromDay(dayOfYear) {
    let month, day;

    if (dayOfYear <= 186) {
        month = Math.ceil(dayOfYear / 31);
        day = dayOfYear % 31 === 0 ? 31 : dayOfYear % 31;

    } else if (dayOfYear <= 336) {
        dayOfYear -= 186;
        month = Math.ceil(dayOfYear / 30);
        day = dayOfYear % 30 === 0 ? 30 : dayOfYear % 30;

    } else {
        dayOfYear -= 336
        month = 12;
        day = dayOfYear;
    }

    return `${month}/${day}`;
}

console.log(getDateFromDay(64));
console.log(getDateFromDay(216));
console.log(getDateFromDay(350));  
