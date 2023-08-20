let string = '()';

var isValid = function(s) {
    
    let s2 = []; 

    for(let i=0; i<s.length; i++){
        if(s[i]==='(' || s[i]==='{' || s[i]==='['){
           s2.push(s[i]);     
        }else if( (s[i]===')' && s2[s2.length-1] === '('  )
                || (s[i]==='}' && s2[s2.length-1] === '{' )
                || (s[i]===']' && s2[s2.length-1] === '[' ))
        {
            s2.pop();
        }
        else{
            return false;
        }
    }
     
        if(s2.length === 0 ){
            return true;
        }    
        return false;
};



console.log(isValid(string));
