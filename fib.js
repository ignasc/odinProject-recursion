function fibs(input){
    const fibSequence = [0, 1];

    if(input <= 2){
        return [0, 1];
    };

    for(let i = 2; i < input; i++){
        fibSequence.push(
            fibSequence[i-2] + fibSequence[i-1]
        );
    };
    return fibSequence;
};

function fibsRec(input, fibseq = [0, 1]){

    if(input <= 2){
        return fibseq;
    };

    let sum = fibseq[fibseq.length-2] + fibseq[fibseq.length-1];

    fibseq = [...fibseq,sum];

    return fibsRec(input-1, fibseq);
};

function testFib(){
    const testLength = [1, 2, 3, 4, 5, 6, 7, 8];

    for(let i = 0; i < testLength.length; i++){
        console.log(`Testing fib sequence of ${i}...`);

        const test1 = fibs(i);
        const test2 = fibsRec(i);

        if(test1.length != test2.length){
            return "The lengths are not the same."
        };

        for(let index = 0; index < test1.length; index++){
            if(test1[index] != test2[index]){
                return "Sequences do not match!";
            };
        };
    };

    return "Sequences match!"

};

console.log(testFib());
