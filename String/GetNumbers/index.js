/**
 **입력예제 1 g0en2T0s8eSoft
 **출력예제 1 208
 */


const getNumbers=(str)=>{
    let answer;

    let regex = /[0-9]/g;

    answer = str.match(regex).join('');

    return parseInt(answer);
 }


 const getNumbers2=(str)=>{

    let answer='';
    for(let char of str){
        //number is true 
        if(!isNaN(char)){
            answer+=char;

        }
    }

    return parseInt(answer);
 }

 module.exports= {getNumbers}

