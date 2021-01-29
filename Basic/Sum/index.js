/**
 *? sum of numbers from 1 to n
 **0 < N < 20
 */

function sum(n){
    if(n>20) return;
    
    return (n*(n+1))/2

}

module.exports = sum;