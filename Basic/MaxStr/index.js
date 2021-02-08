/**
 * ? find longest char 
 * @param {Number} numOfStr 
 * @param {Array} arr 
 */

const maxStr=(numOfStr,arr)=>{
    let max = Number.MAX_SAFE_INTEGER;
    let maxStr;
    for(let x of arr){
        if(x.length>max){
            max= x.length;
            maxStr= x;            
        }
        
    }
    

    return maxStr;
}

//

console.log(maxStr(5,['teacher','time','student','beautiful','good']))