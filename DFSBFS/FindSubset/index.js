
function solution(n) {
    let isUsed = Array.from({ length: n + 1 }, () => 0);
    let answer = "";
    dfs(1);

    function dfs(curr) {
        if (curr > n) {
            for (let key in isUsed) {
                if (key === 0) continue;
                if (isUsed[key] === 1) answer += String(key);
            }
            console.log(answer);
            answer = "";
            return
        } else {
            isUsed[curr] = 1;
            dfs(curr + 1);
            isUsed[curr] = 0;
            dfs(curr + 1);
        }
    }
}

solution(3)