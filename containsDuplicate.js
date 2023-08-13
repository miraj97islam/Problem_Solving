let arr = [1,3,4,3,2,4,2];

let containsDuplicate = function(nums){

    for(let i = 0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i]===nums[j]){
                return true;
            }
        }
    }  

    return false;
}

containsDuplicate(arr);
