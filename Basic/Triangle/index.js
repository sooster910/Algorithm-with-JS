/**
 *? If three given integers can be triangle, return YES otherwise NO 
 *?길이가 서로 다른 A,B,C세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들수 있으면,\
 *?"YES" 를 출력하고 , 만들 수 없으면 "NO"를 출력한다.
 **constraint: 
 **100 이하의 서로 다른 A,B,C 막대의 길이가 주어진다
 * !hint: 삼각형의 결정 조건 -> 세변의 길이를 알 때, 가장큰변의 길이는 다른 길이의  합보다 작아야 한다. 
 * @param {Number} a 
 * @param {Number} b 
 * @param {Number} c 
 */

// function triangle(a,b,c){

//     if(((a && b && c) <100) && (a+b>c && b+c>a &&a+c>b) ){
//         return "YES"
//     }  
//     return "NO"
// }

function triangle(a,b,c){
    let max;
    let answer = "YES";
    const sum = a+b+c;
    if(a &&b&&c >= 100) return;
    
    if(a<b){
        max =b;
    }else 
        max =a;
    if(max < c) max = c;

    if(sum-max <= max) answer= "NO"; 
    
    return answer;
}



module.exports = triangle;