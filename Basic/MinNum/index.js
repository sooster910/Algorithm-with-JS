/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 */


function minnum(a,b,c){
    if(a && b && c >=100) return;
    
    //find min number 
    let min;
    if(a>b){
        min=b;    
    }else{
        min=a
    }
    if(c<min) min= c; 

    return min;
 
}

module.exports = minnum;

