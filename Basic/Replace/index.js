//using iterate for loop

function replace1(str){
    //iterate string 

    let result ='';
    for(let char of str){
        if(char ==='A'){
            char='#' 
        }
        result+=char
    }
    return result;
    
}

//using regex replace  search element and replace
function replace2(str){
    let regex=/A/g;

      return str.replace(regex,'#');

}

console.log(replace("BANANA"))

exports.replace1 = replace1;
exports.replace2 = replace2;