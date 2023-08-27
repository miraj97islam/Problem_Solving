n = 43261596;

var reverseBits = function(n) {
    
    let m = n.toString(2);
    let p = '';
    let i = 0;
    
    for(i=0; i<32-n.toString(2).length; i++){
        m = '0' + m;
    }
    
    for(i = m.length-1; i>=0; i--){
        p += m[i];
    }
    
     return parseInt(p, 2);    
};

console.log(reverseBits(n));
