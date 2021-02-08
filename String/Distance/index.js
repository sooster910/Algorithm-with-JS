/**
 * 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출 력하는 프로그램을 작성하세요.
 * ▣ 입력설명
첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다. 문자열의 길이는 100을 넘지 않는다.
▣ 출력설명
첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.
 입력예제  teachermode e
 출력예제  10121012210


 * @param {String} str 
 */

/**
 * ! my solution
 */
const distance = (str,target)=>{
    let targetIndex =  str.indexOf(target);
    let answer=[];
    
    for(let i=0; i<str.length; i++){
        
        let minDistance = Math.min(targetIndex-i, i+1)
       
        answer.push(minDistance)
        if(minDistance === 0 ){
            str= str.slice(targetIndex+1);
            targetIndex = str.indexOf(target);
            i=-1; continue;
        }
       
    }
    
    return answer;

}

//answer
/**
 ** 현재index 위치가 왼쪽으로 부터의 거리, 그리고 오른쪽으로 부터의 거리를 구하는게 관건. 
 ** 나의 solution에서는, 현재 index에서 왼쪽 & 오른쪽으로 부터의 거리를 구해서 min 을 찾는것. 
 ** 새로운 solution에서는 , 첫번째 for loop에서는 왼쪽으로부터의 거리 ,
 ** 두번째 for loop 에서는 오른쪽으로 부터의 거리를 구한다음 min 을 구한다.   
 * @param {String} str 
 * @param {String} target 
 */
const distance1 = (str, target)=>{
        // start from P=1000  if e, p = 0 else p++
        //why P=1000? because 
        let distance = 1000;
        let answer=[];
        
        for(let char of str){
            if(char === target){
                distance=0;
            }else{
                distance++;
            }

            answer.push(distance);
        }

        //start from right, answer array를 minDistance 로 바꾼다.
        distance=0;

        for(let i=str.length-1; i>= 0; i--){
            if(str[i] === target ){
                distance=0;
            }else{
                distance++;
            }
            answer[i]=Math.min(answer[i], distance)

        }
        return answer;


    }

    // distance1('teachermode','e')
module.exports={distance, distance1};