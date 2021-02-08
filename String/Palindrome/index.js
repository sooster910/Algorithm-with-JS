/**
 * 
 * constraint : only take alphabet, ignore case sensitive
 * input: found7, time: study; Yduts; emit, 7Dnuof
 * output: true 
 */

const isPalindrome = (str)=>{
    //replace to array .split('')
    // if (str==null) return;

    
    let specialChar = /[^A-Za-z 0-9]/g;
    let formattedStr = str.replace(specialChar,'').toLowerCase();
    let left = 0;
    let right = str.length-1;
    let answer= true;

    while(left<right){
        if(formattedStr[left] !== formattedStr[right]) !answer;
        
        left++;
        right --;


    }
    return answer;

}
module.exports = {isPalindrome}