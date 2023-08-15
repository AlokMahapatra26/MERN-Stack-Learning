function sSort(str){
    let charArray = str.split('');
    charArray.sort();
    let sortedString = charArray.join('');
    return sortedString;
}



function isAnagram(str1 , str2){
    if(sSort(str1) === sSort(str2)){
        return true;
    }else{
        return false;
    }
}

console.log(isAnagram("rasp" , "pasr"));
