function combineNumbers(arr) {
  let odd = [];
  let even = [];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    }
    if (arr[i] % 2 !== 0) {
      odd.push(arr[i]);
    }
  }
  return [even.join(","), odd.join(",")];
}
console.log(combineNumbers([1, 2, 3, 4]));
