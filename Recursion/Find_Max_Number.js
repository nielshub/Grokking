let NumArray = [1, 2, 3, 65, 5, 6];
//let Max_Value = 0;

function Find_Max_number(ValueArray, Max_Value) {
  if (ValueArray.length === 0) {
    return Max_Value;
  }
  let PoppedValue = ValueArray.pop();
  if (PoppedValue > Max_Value) {
    Max_Value = PoppedValue;
  }
  return Find_Max_number(ValueArray, Max_Value);
}

let result = Find_Max_number(NumArray, 0);
console.log("Max Value in List: " + result);
