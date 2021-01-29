/**
 * ? Calculate sum of odd num within a given array and min of odd num 
 * 
 * @param {Array} arr 
 */


function oddNum(arr){
    
    const answer=[]; 
    let sum = 0, min= Number.MAX_SAFE_INTEGER;

    for(let num of arr){
         if(num%2 ===1){
            sum+=num;
            
            if(num<min){
                min = num
            }
         }
    }
    answer.push(sum);
    answer.push(min);

    return answer;
}

module.exports = oddNum;