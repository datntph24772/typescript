var numArr = [1, 2, 3, 4, 5];
var strArr = ["a", "b", "c"];
function WE17317_map(arr, callback) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        var newItem = callback(arr[i]);
        temp.push(newItem);
    }
    return temp;
}
var result123 = WE17317_map(numArr, function (item) {
    return item;
});
console.log(result123);
// không cần phải viết lại hàm cho những kiểu dữ liệu khác nhau
