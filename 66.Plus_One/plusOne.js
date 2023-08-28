
let digit = [9,9]

var plusOne = function(digits) {

    let newDigits = digits;

        if( (newDigits[newDigits.length-1] +  1) !== 10){
            
            newDigits[newDigits.length-1] += 1;
            
            return newDigits;
        }
    

        for(let i = newDigits.length-1; i>=0; i--){
            if( (newDigits[newDigits.length-1] === 9 || newDigits[i] === 10 ) && i !==0){
                newDigits[i] = 0;
                newDigits[i-1] += 1;
            }else if ( (newDigits[newDigits.length-1] === 9 || newDigits[i] === 10 ) && i === 0){
                newDigits[i] = 0;
                newDigits.unshift(1);
            }
        }


    return newDigits;
};


console.log(plusOne(digit));
