/**
 * 두 배열을 오름차순으로 합쳐 출력하는 프로그램
  첫 번째 줄에 첫 번째 배열의 크기 N(1<=N<=100)이 주어집니다. 두 번째 줄에 N개의 배열 원소가 오름차순으로 주어집니다.
 세 번째 줄에 두 번째 배열의 크기 M(1<=M<=100)이 주어집니다. 네 번째 줄에 M개의 배열 원소가 오름차순으로 주어집니다.
 각 리스트의 원소는 int형 변수의 크기를 넘지 않습니다.

 * @param arr
 */

const mergeTwoArray=(n,m,arr1,arr2)=>{
    var answer = [];
    //create two pointers
    //one for first array
    let p1 =0;
    //one for second array
    let p2 = 0;
    let min = Number.MAX_SAFE_INTEGER
    //p1<n && p2<m && 인 이유는 포인터 하나라도 배열을 넘어 끝나면 끝난것이다
    while (p1<n || p2<m){
        if(arr1[p1]<arr2[p2]){
            min = arr1[p1]
            p1+=1
        }else{
            min = arr2[p2]
            p2+=1
        }

        answer.push(min)

    }
    console.log(answer)
return answer;
}

//timecomplexity O(n+m)
mergeTwoArray(3,5,[1,3,5], [2,3,6,7,9])
// module.exports = {mergeTwoArray};
