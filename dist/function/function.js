// 1. Function return
function demoFunc() {
    // console.log("");
    return;
}
// never
function neverFunc() {
    const error = new Error("Có lỗi xảy ra");
    throw error;
}
const result = demoFunc();
// console.log(result);
// 2. Function parammeter
const showInfo = (firstName, lastName, midName) => {
    return "Tên sinh vien: " + firstName + " " + midName + " " + lastName;
};
// console.log(sum(10, 20));
// Hoisting
function sum(a, b) {
    return a + b;
}
// 3. Optional ?
// console.log(showInfo("Nguyễn", "Bảo", "Bằng"));
// 4. Function declaration
const func2 = function () {
};
const func3 = () => {
};
// 5. Callback
function we17317_map(arr, callback) {
}
let numberArray = [1, 2, 3];
const newArr = numberArray.map((item) => {
    return item * 2;
});
console.log(newArr);
//
function numFun(num, callback) {
    // chạy đc khi gọi trên func
    let temp = [];
    num.forEach(item => {
        const result = callback(item);
        temp.push(result);
    });
    console.log(temp);
}
const arrNum = [1, 2, 3, 4, 5];
const num1 = numFun(arrNum, (item) => {
    return item * 2;
});
console.log(num1);
//6 Rest parameter
const showClass = function (name, ...classes) {
    console.log(`${name} học ${classes.join(", ")}`);
};
showClass("Đụt", "Typescript", "Nodejs");
