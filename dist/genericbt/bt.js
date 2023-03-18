function selectionSort(arr, callback) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (callback(arr[i], arr[j]) > 0) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
var numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(selectionSort(numbers, function (a, b) {
    return b - a;
})); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
var strings = ["banana", "apple", "orange", "pear"];
console.log(selectionSort(strings, function (a, b) {
    return b.localeCompare(a);
})); // ["apple", "banana", "orange", "pear"]
