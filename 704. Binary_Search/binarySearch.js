// let nums = [-1,0,3,5,9,12];
let nums =  [-1,0,3,5,9,12];
// let nums = [-5,1,9,12];
let target = 2;

let search = function(nums, target){

    let startIndex = 0;
    let endIndex = nums.length - 1;

    while (startIndex <= endIndex){
 
        let midIndex = Math.floor((startIndex + endIndex) / 2);

        if(nums[midIndex] === target) return midIndex;
        else if(nums[midIndex] > target) endIndex = midIndex - 1;
        else if(nums[midIndex] < target) startIndex = midIndex + 1;
    }

    return -1;
    
}


console.log(search(nums, target));

