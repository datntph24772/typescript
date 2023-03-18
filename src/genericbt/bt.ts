function selectionSort<T>(arr: T[], callback: ((a: T, b: T) => number)): T[] {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (callback(arr[i], arr[j]) > 0) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }

  return arr;
}

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

console.log(selectionSort(numbers, (a, b) => {
  return b - a
})); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

const strings = ["banana", "apple", "orange", "pear"];

console.log(selectionSort(strings, (a, b) => {
  return b.localeCompare(a)
})); // ["apple", "banana", "orange", "pear"]
