function mergeTester(){
    const test1 = [3, 2, 1, 13, 8, 5, 0, 1];
    const test2 = [105, 79, 100, 110];

    console.log("First sorting test:")
    console.log(`Initial ${test1}`)
    console.log(`Sorted ${mergeSort(test1)}`);
    console.log("\nSecond sorting test:")
    console.log(`Initial ${test2}`)
    console.log(`Sorted ${mergeSort(test2)}`);

};

function mergeSort(array){
    if(array.length == 1){
        return array;
    };

    const arrayMidpoint = parseInt(array.length / 2);

    const firstHalfArray = mergeSort(array.slice(0, arrayMidpoint));
    const secondHalfArray = mergeSort(array.slice(arrayMidpoint));

    let sortedArray = [];

    while(firstHalfArray.length != 0 && secondHalfArray.length != 0){
        const firstNumber = firstHalfArray[0];
        const secondNumber = secondHalfArray[0];

        if(firstNumber < secondNumber){
            sortedArray.push(firstHalfArray.shift());
        } else{
            sortedArray.push(secondHalfArray.shift());
        };
    };

    return [...sortedArray, ...firstHalfArray, ...secondHalfArray];
};

mergeTester();
