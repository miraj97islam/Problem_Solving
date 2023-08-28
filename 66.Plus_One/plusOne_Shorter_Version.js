
let digit = [9,9]

var plusOne = function(digits) {

    let newDigits = digits;

        for(let i = newDigits.length-1; i>=0; i--){
            newDigits[i]++ ;

            if(newDigits[i] > 9){
                newDigits[i] = 0;
            }else{
                return digits;
            }
        }
            newDigits.unshift(1);

            return newDigits;          
             
};


console.log(plusOne(digit));
