/*
 첫 번째 줄에 반 학생 수 N(1<=N<=20)과 M(1<=M<=10)이 주어진다.
두 번째 줄부터 M개의 줄에 걸쳐 수학테스트 결과가 학생번호로 주어진다. 학생번호가 제일 앞에서부터 1등, 2등, ...N등 순으로 표현된다.
만약 한 줄에 N=4이고, 테스트 결과가 3 4 1 2로 입력되었다면 3번 학생이 1등, 4번 학생이 2등, 1번 학생이 3등, 2번 학생이 4등을 의미합니다.
 ▣ 입력예제 1 43
3412 4321 3142
▣ 출력예제 1 3
(3, 1), (3, 2), (4, 2)와 같이 3가지 경우의 (멘토, 멘티) 짝을 만들 수 있다.
 */

let answer;
n=4
m=3
let arr = [[3,4,1,2] ,[4,3,2,1] ,[3,1,4,2]]
let answer =[]

//경우의 수 구하기
for (let k= 0; k<m;k ++ ){
    let innerArr=arr[i]
    if (k == 0){
        for(let i = 0; i<3; i++){
            for(let j = 0; j<n;j++) {

                arr[i][j].push(answer)
            }
        }
    }else{
        let prevArr = [...answer];
        answer=[]
        for (let x= 0; x<prevArr.length;x++){
            let first = prevArr[x][0]
            let second = prevArr[x][1]
            //index가 적은 원소가 등수가 높음 (1등 ,2등)
            if(innerArr.indexOf(first)<innerArr.indexOf(second)){
                answer.push([first,second])
            }
        }
    }

}



