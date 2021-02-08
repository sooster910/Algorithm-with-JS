/**
* ? 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세 요. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.
** 입력설명
**첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
** 출력설명
**첫 줄에 가운데 문자를 출력합니다.
**입력예제 1 study
** 출력예제  u
**입력예제  good
**출력예제  oo
 */

 //나의 풀이 
 const middleChar = (str)=>{
     if(str.length>100 || str.length===0) return;
     let answer;
     let middlePoint= (str.length/2);
    
          if(Number.isInteger(middlePoint)){
              console.log(middlePoint)
            console.log('yes')
            answer = str.slice(middlePoint-1,middlePoint+1);
            }else{
            middlePoint = Math.floor(middlePoint)
            answer = str.charAt(middlePoint);

            }

            return answer;
 }

 //answer
//  const middleChar = (str)=>{
//     if(str.length>100 || str.length===0) return;
//     let answer;
//     let middlePoint= math.floor(str.length/2);
   
//          if(middlePoint ===  middlePoint.isInteger){
//            answer = str.slice(middlePoint,middlePoint+2);
//            }else{
//            middlePoint = Math.floor(middlePoint)
//            answer = str.charAt(middlePoint);

//            }

//            return answer;
// }

 console.log(middleChar('good'))