/**
 *?  N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요.
 **입력설명
**첫 줄에 자연수 N이 주어진다.(3<=N<=30)
**두 번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않습니다.
**출력설명
**첫 줄부터 중복이 제거된 문자열을 차례로 출력한다.
** 입력예제 
**[good, time, good, time, student]
** 출력예제  good
**time
**student
 */

 //나의 풀이
const removeDuplicatedChar=(arr)=>{
    const mapSet = new Set(arr);
    const answer = [];
    for(let item of mapSet){
        answer.push(item);
    }

    return answer;
}

//answer
const removeDuplicatedChar=(arr)=>{
    const uniqueArr = arr.filter((word,i)=>{
    return arr.indexOf(word)===i;

    });

    console.log(uniqueArr)
}

removeDuplicatedChar(['good', 'time', 'good', 'time', 'student']);