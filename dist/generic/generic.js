const numArr = [1, 2, 3, 4, 5];
const strArr = ["a", "b", "c"];
function WE17317_map(arr, callback) {
    const temp = [];
    for (let i = 0; i < arr.length; i++) {
        const newItem = callback(arr[i]);
        temp.push(newItem);
    }
    return temp;
}
const result123 = WE17317_map(numArr, (item) => {
    return item;
});
console.log(result123);
// không cần phải viết lại hàm cho những kiểu dữ liệu khác nhau
