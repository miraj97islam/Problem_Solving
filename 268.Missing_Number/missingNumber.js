nums = [2,0,1,3];

let missingNumber = function(nums) {
    
    let numsTotal = 0;
    let indexTotal = 0;

    for(let i=0; i<nums.length; i++){
        numsTotal += nums[i] ;
    }

    for(let i=0; i<=nums.length; i++){
        indexTotal += i ;
    }
    
    return indexTotal - numsTotal;
};

console.log(missingNumber(nums));
