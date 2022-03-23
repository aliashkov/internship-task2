function currentSums(simpleNumbers){
    let changedArray = [];
    simpleNumbers.reduce((sum, current, index) => changedArray[index] = sum + current, 0);
    return changedArray;
}

let result4 = currentSums([2,3,5,7,11,13,17,19]);
console.log(result4);