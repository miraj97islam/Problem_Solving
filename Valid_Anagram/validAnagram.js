//242. leetcode problem

string1 = 'mmjrai'
string2 = 'mirajm'


let isAnagram = function(s,t){
    let sSplited = s.split('')
    let tCopy = [...t];
  
        for(let i=0; i<sSplited.length; i++){
            if(sSplited.length - i === tCopy.length){          
               if( tCopy.includes(sSplited[i]) ){
                tCopy.splice(tCopy.indexOf(sSplited[i]), 1)    //remove matched character
               }else{
                return false;
               } 
            }else{
                return false;
            }
        }

        return true;
}

isAnagram(string1,string2);
