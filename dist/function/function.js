// 1. Function return
function demoFunc() {
    // console.log("");
    return;
}
// never
function neverFunc() {
    var error = new Error("Có lỗi xảy ra");
    throw error;
}
var result = demoFunc();
// console.log(result);
// 2. Function parammeter
var showInfo = function (firstName, lastName, midName) {
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
var func2 = function () {
};
var func3 = function () {
};
// 5. Callback
function we17317_map(arr, callback) {
}
var numberArray = [1, 2, 3];
var newArr = numberArray.map(function (item) {
    return item * 2;
});
console.log(newArr);
//
function numFun(num, callback) {
    // chạy đc khi gọi trên func
    var temp = [];
    num.forEach(function (item) {
        var result = callback(item);
        temp.push(result);
    });
    console.log(temp);
}
var arrNum = [1, 2, 3, 4, 5];
var num1 = numFun(arrNum, function (item) {
    return item * 2;
});
console.log(num1);
//6 Rest parameter
var showClass = function (name) {
    var classes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        classes[_i - 1] = arguments[_i];
    }
    console.log("".concat(name, " h\u1ECDc ").concat(classes.join(", ")));
};
showClass("Đụt", "Typescript", "Nodejs");
