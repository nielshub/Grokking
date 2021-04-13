let NumArray = [1,2,3,4,5,6]

function Sum_Recursion(SumArray){
    if(SumArray.length===1){
        return SumArray[0];
    }
    console.log(SumArray[SumArray.length-1])
    return SumArray.pop() + Sum_Recursion(SumArray);
}

let result = Sum_Recursion(NumArray)
console.log("Result is: " + result)