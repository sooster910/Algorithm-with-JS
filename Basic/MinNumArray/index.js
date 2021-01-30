/**
 * 
 * @param {Num or Array} arr 
 * 
 */
function minNumArray(arr){
   
    let min = Number.MAX_SAFE_INTEGER;

    for(let i=0; i<arr.length; i++){
        if(arr[i]<min) min = arr[i]
    }
    return min;   
 }


 function minNumArray2(arg){
     return Math.min(...arg);
    //return Math.min.apply(null, arr)
 }
 
// console.time('minNumArray response in')
//     minNumArray([5,7,1,3,2,9,11]);
// console.timeEnd('minNumArray response in')

console.time('minNumArray2 response in')
    console.log(minNumArray2(...[2,7,1,3,2,9,11]));
console.timeEnd('minNumArray2 response in')


 exports.minNumArray = minNumArray;
 exports.minNumArray2 = minNumArray2;
