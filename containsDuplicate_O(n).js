let arr = [1,2,3,1];

let containsDuplicate = function(nums){
    
    let object = {};

    for(let i=0; i<nums.length; i++){
        
        if(object.hasOwnProperty(nums[i])){
            return true
        }

        object[nums[i]] = nums[i];
    }
   return false;
}

containsDuplicate(arr);
