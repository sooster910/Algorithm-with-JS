const solution = s => {
    if (s.length === 1) return 1;
    let length = s.length;
    let prevValue = "";
    let cnt = 0;
    let result = [];
    for (let i = 1; i <= length / 2; i += 1) {
        let compArray = [];
        prevValue = s.substring(0, i);
        cnt = 1;
        compArray[0] = prevValue;
        for (let j = i, c = 0; j < length; j += i) {
            let nowValue = s.substring(j, j + i);
            if (nowValue === prevValue) {
                compArray[c] = ++cnt + nowValue;
            } else {
                cnt = 1;
                compArray[++c] = nowValue;
            }
            prevValue = nowValue;
        }
        result[i - 1] = compArray.reduce((total, cur) => (total += cur.length), 0);
    }
    return result.sort((a, b) => a - b)[0];
};

console.log(solution("aabbaccc"))