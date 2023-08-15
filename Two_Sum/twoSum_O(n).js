let nums = [2,7,11,15];
let target = 9;


twoSum = function(nums, target) {
    const obj = {};
    const arr = [];

    for(let i=0; i<nums.length; i++){
        
        if(obj[target - nums[i]] + 1){   // +1 otherwise return 0(false) for value 0
            
            return arr[0,1] = [ obj[target - nums[i]], i ];
        }

        obj[nums[i]] = i;
    }

    return arr;
}

twoSum(nums, target);
