// s = "Aman, a plan, a Canal: Panama"
s= 'race a car';

var isPalindrome = function(s) {
  s1 = s.toLowerCase();
  s2 = s1.replace(/[^A-Za-z0-9]/g, '')

  for(let i=0; i<s2.length; i++){
     if(s2[i] !== s2[s2.length-i-1]){
        return false;
     }
  }
  return true;

};

console.log(isPalindrome(s));
