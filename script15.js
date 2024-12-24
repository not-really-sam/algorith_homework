//tamrin 15//

const students = [
    {stdName: "A", stdNumber: 1, certifCode: 2, age: 19, majorCode: 24, genderCode: 1},
    {stdName: "B", stdNumber: 2, certifCode: 1, age: 16, majorCode: 21, genderCode: 2},
    {stdName: "C", stdNumber: 3, certifCode: 1, age: 17, majorCode: 21, genderCode: 1},
    {stdName: "D", stdNumber: 4, certifCode: 0, age: 18, majorCode: 23, genderCode: 2},
    {stdName: "E", stdNumber: 5, certifCode: 2, age: 18, majorCode: 22, genderCode: 1},
    {stdName: "F", stdNumber: 6, certifCode: 0, age: 17, majorCode: 24, genderCode: 2},
    {stdName: "G", stdNumber: 7, certifCode: 1, age: 19, majorCode: 21, genderCode: 1},
    {stdName: "H", stdNumber: 8, certifCode: 1, age: 19, majorCode: 22, genderCode: 2},
    {stdName: "I", stdNumber: 9, certifCode: 1, age: 18, majorCode: 23, genderCode: 1},
    {stdName: "J", stdNumber: 10, certifCode: 0, age: 18, majorCode: 23, genderCode: 2},

];

let partOne = [];
students.map( item => {
    if (item.genderCode === 2 && item.majorCode === 24) {
        partOne.push(item.stdName);
    }
});
console.log("there are ",partOne.length, " student(s) who are both male and majored in major 24.");


let partTwo = [];
students.map( item => {
    if (item.age<18) {
        partTwo.push(item.stdName);
    }
});
console.log("there are ",partTwo.length, " student(s) who are under the age of 18.");

let partThree = [];
students.map( item => {
    if (item.majorCode === 24) {
        partThree.push(item.stdName);
    }
});
const avgTwentyFour = (partThree.length / students.length) * 100;
console.log(avgTwentyFour, "% of students are majored in major 24.");
