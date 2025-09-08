function fibs(input){
    const fibSequence = [0, 1];

    if(input < 1){
        return "Enter input higher than 0";
    };

    if(input < 2){
        return [0];
    };

    if(input == 2){
        return [0, 1];
    };

    for(let i = 2; i < input; i++){
        fibSequence.push(
            fibSequence[i-2] + fibSequence[i-1]
        );
    };
    return fibSequence;
};
