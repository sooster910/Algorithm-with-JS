/**
 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요.
문자열의 길이는 100을 넘지 않습니다.
▣ 입력설명
첫 줄에 문자열이 주어지고, 두 번째 줄에 문자가 주어진다.
▣ 출력설명
첫 줄에 해당 문자의 개수를 출력한다.
▣ 입력예제  COMPUTERPROGRAMMING  R
▣ 출력예제  3
 * 
 * @param {String} str 
 */

// function numOfChar(str, target){
//     if(str.length>100) return;
//     let count=0;
//     for(let char of str){
//         if(char===target) count++;
//     }
//     return count;
// }

//using builtin function -> split
function numOfChar(str, target){

    return str.split(target).length-1
    
}
console.log(numOfChar('COMPUTERPROGRAMMING', 'R'))