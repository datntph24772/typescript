var numArray3 = [5, 13, 8, 2, 3, 1];
var textArray3 = ["c", "a", "b", "e"];
// // console.log(numArray3);
// function selectionSort(arr) {
//     for(let i = 0; i < arr.length - 1; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             if(arr[i] > arr[j]) {
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
// }
// selectionSort(numArray3)
// console.log(numArray3);
// function WE17317_Sort<T>(arr: T[], callback: ((a: T,b:T) => T)): T[] {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] < arr[j]) {
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr
// }
// const resultgeneric = WE17317_Sort(numArray3, (a,b) => {
//     return b-a
// })
// console.log(resultgeneric);
function WE17317_Sort(arr, callback) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (callback(arr[i], arr[j]) > 0) {
                if (arr[i] > arr[j]) {
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
            else if (callback(arr[i], arr[j]) < 0) {
                if (arr[i] < arr[j]) {
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
    return arr;
}
console.log(WE17317_Sort(numArray3, function (a, b) {
    if (typeof a == "number" && typeof b == "number") {
        return a - b;
    }
    else if (typeof a == "string" && typeof b == "string") {
        return a.localeCompare(b);
    }
}));
console.log(WE17317_Sort(textArray3, function (a, b) {
    if (typeof b == "number" && typeof a == "number") {
        return b - a;
    }
    else if (typeof b == "string" && typeof a == "string") {
        return b.localeCompare(a);
    }
}));
