let ListArray = [1, 2, 3, 4, 5, 6, "Hello"];

function Count_List_Items(CountListArray) {
  if (CountListArray.length === 1) {
    return 1;
  }
  CountListArray.pop();
  return 1 + Count_List_Items(CountListArray);
}

let result = Count_List_Items(ListArray);
console.log("Items in List: " + result);
