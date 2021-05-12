function solution(target){
    dfs(1);
    
    function dfs(n){
        //7포함
        if (target<n){
            return
        }else{
            console.log(n)
            dfs(n*2)
            dfs(n*2+1)
        }
    }
}

solution(7);