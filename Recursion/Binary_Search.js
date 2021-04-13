let NumArray = [1, 2, 3, 4, 5, 6, 10, 15, 20, 50];

function Binary_Search(x, ValueArray, high, low) {
  let middle = Math.round((high + low) / 2);
  let solution;

  if (high < low) {
    return -1;
  } else {
    if (x === ValueArray[middle]) {
      solution = middle;
    }
    if (x < ValueArray[middle]) {
      solution = Binary_Search(x, ValueArray, middle - 1, low);
    }
    if (x > ValueArray[middle]) {
      solution = Binary_Search(x, ValueArray, high, middle + 1);
    }
    return solution;
  }
}

let result = Binary_Search(50, NumArray, NumArray.length - 1, 0);
console.log("Value is in position: " + result);
