firstString = 'mamam'
secondString = 'namam';


let isAnagram = function (s, t){
    let sCopy = [...s];
    let tCopy = [...t];

    let sObject = {};
    let tObject = {};

    if(s.length !== t.length){
        return false;
    }


    createObject(sObject, sCopy);

    createObject(tObject, tCopy);

     if(compareObjects(sObject, tObject)){
        return true;
    }

    return false;

}


function createObject(object, array){

    for(let i=0; i<array.length; i++){
        if(object.hasOwnProperty(array[i])){
            object[array[i]] +=1; 
        }else{
            object[array[i]] = 1;
        }
    }

    return object;

    //if i use below portion of code to loop through the array, the memory usage increase
    // why ?

    // for(let elm of array){
    //     if(object.hasOwnProperty(elm)){
    //         object[elm] +=1; 
    //     }else{
    //         object[elm] = 1;
    //     }
    // }

}


function compareObjects(sObject, tObject){
    for(let key in sObject){
        if(sObject[key] === tObject[key]){
            null;
        }else{
            return false;
        }
    }

    return true;
}

isAnagram(firstString, secondString);
