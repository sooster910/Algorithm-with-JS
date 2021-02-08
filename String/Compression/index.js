/**
 * 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시 오. 단 반복횟수가 1인 경우 생략합니다.
▣ 입력설명
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
▣ 출력설명
첫 줄에 압축된 문자열을 출력한다.
▣ 입력예제 1 KKHSSSSSSSE
▣ 출력예제 1 K2HS7E
 */


 const compression =(str)=>{
     
    let answer =''; 
    let cnt = 1;
    for(let i=0; i<str.length;i++){
        if(str[i]!==str[i+1]){
            //todo:refactoring 하기 
            if(cnt!==1){
             answer= answer+str[i]+cnt
            }else{
            answer = answer+str[i]
            }
            cnt=1;

        }else{
            cnt++;
        }
    }
    
    return answer;
 }

 const compression1 =(str)=>{
            
    let answer =''; 
    let cnt = 1;

    str = str+" "; //last index를 비교하기 위해서 

    for(let i =0; i<str.length-1; i++){
        if(str[i] !== str[i+1]){
            answer+=str[i];
            if(cnt>1) answer+=String[cnt];
            cnt=1;
        }else{
            cnt++;
        }
    }
 }

 module.exports = {compression,compression1}