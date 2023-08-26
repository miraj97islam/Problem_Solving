
n=  4294967293;

var hammingWeight = function(n) {
    let m = n.toString(2);
    let count = 0;

    for(let i=0; i<m.length; i++){
        if(m[i]=== '1'){
            count += 1;
        }
    }

    return count;
  
};

console.log(hammingWeight(n));
