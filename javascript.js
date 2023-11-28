
let array1 = [1,2,3,3,4]
let array2 =  [1, [2], [3, [[4]]],[5,6]]
let finalArray =[]
// flatten I say
function flatten(array){
    //removes all nested arrays
     return array.flat(10)
}

function compare(a,b){
    //removes nested arrays
    let first = flatten(a)
    let second = flatten(b)
    //values that appear multiple times get put in the naughty corner(array)
    let poppedValues = []
    //inefficient loop
    for (i of first){
        //removes first element(used to compare and check for duplicates)
        let x = first.shift()
        //checks all elements inside of array/final array/and popped values
        first.includes(x) || finalArray.includes(y) || poppedValues.includes(y) ? poppedValues.push(x): finalArray.push(x);
        //adds back to the original array
        first.push(x)
    }

    for(i of second){
        //removes first element(used to compare and check for duplicates)
        let y = second.shift()
        //checks all elements inside of array/final array/and popped values ****IMPORTANT
        second.includes(y) || finalArray.includes(y) || poppedValues.includes(y) ? poppedValues.push(y): finalArray.push(y)
        //pushes to original array
        second.push(y)
    }
    // sort from smallest to biggest
    console.log(finalArray.sort((a,b)=> a-b));
}
    compare(array1,array2)
