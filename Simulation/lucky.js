let input= "0101";
let answer="";
let length = input.length;
let totalSum =0;
let firstSum=0;
for (let key in input){
     totalSum+=Number(input[key]);
    if(key === String((length/2)-1)){
     firstSum = totalSum;   
    }    
}

if(totalSum-firstSum === firstSum){
    answer="LUCKY";
}else{
    answer="READY";
    
}
console.log(answer)


