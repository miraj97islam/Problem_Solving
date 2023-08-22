
head = [1,2,3,4,5];

var reverseList = function(head) {

    let headReversed = [];
    let index = 0;
    for(let i=head.length-1; i>=0; i--){

        headReversed[index] = head[i];
        index+=1;
    }
    
    return headReversed;
};

console.log(reverseList(head));
