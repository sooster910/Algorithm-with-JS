/**
 *?input: 1011100110
 *?outptu:10
 */

 const calculateScore=(arr)=>{
    let totalScore=0;
    let tempScore= 0;

    for(let i=0;i<arr.length; i++){
        if(arr[i] ===1){
            tempScore=1;
        }else{
            tempScore=0
        }

        if(arr[i] ===arr[i-1]){
            tempScore+=arr[i];
        }

        totalScore+=tempScore;
        }
        return  totalScore;
    
        
    }

    //TODO: 현수야 생각을 하자 쉬운문제인데... 문제점은... 문제를보는관점
    //TODO: 1이면 ++ 이고 0이면 계산할 필요가 없다 그러므고 if(i===1)에서 모든 것을 해결
    /**
     * *어떻게 연속된 1이 나오면 누적된 값을 계산 할 수 있을까?
     ** temp++ 1씩 증가함. total+=temp
     */
    
    

 

 calculateScore([1,0,1,1,1,0,0,1,1,0])