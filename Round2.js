function findOddsNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      arr[i] = arr[i].length;
    }
  }
  return arr[i]
}
console.log(findOddsNumbers[(1, 2, "number")]);
