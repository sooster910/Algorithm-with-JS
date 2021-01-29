/**
*? 서울시는 6월 1일부터 교통 혼잡을 막기 위해서 자동차 10부제를 시행한다. 자동차 10부제는 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행을 금 지하는 것이다. 예를 들어, 자동차 번호의 일의 자리 숫자가 7이면 7일, 17일, 27일에 운행하 지 못한다. 또한, 자동차 번호의 일의 자리 숫자가 0이면 10일, 20일, 30일에 운행하지 못한 다.
*? 여러분들은 일일 경찰관이 되어 10부제를 위반하는 자동차의 대수를 세는 봉사활동을 하려고 한다. 날짜의 일의 자리 숫자가 주어지고 7대의 자동차 번호의 끝 두 자리 수가 주어졌을 때 위반하는 자동차의 대수를 출력하는 프로그램을 작성하세요.
*?입력설명
*?첫 줄에는 날짜의 일의 자리 숫자가 주어지고 두 번째 줄에는 7대의 자동차 번호의 끝 두 자 리 숫자가 주어진다.
*?출력설명
*?주어진 날짜와 자동차의 일의 자리 숫자를 보고 10부제를 위반하는 차량의 대수를 출력합니 다.
*?input : 3, [25, 23, 11, 47, 53, 17, 33]
*?output : 3
 */

 /**
  * 
  * @param {Number} day 
  * @param {Array} arr
  * 
  */

 function weeklyCarFreeDay(day, arr){
     let count=0;
     
     
     for( drivingNum of arr){
        if(drivingNum % 10 === day) count++;
        
        // if((drivingNum + '').lastIndexOf(day) > -1){
        //     count++;
        // }
     }
     return count;

 }

 module.exports = weeklyCarFreeDay;


 /**
  * * indexOf(searchElement, fromIndex) returns (index)location of values in an array.
  * * var array = [2,9,9];
  * * array.indexOf(2) //0  ---> same as array.indexOf(2) > -1
  * * array.indexOf(7) //-1 ---> same as array.indexOf(7) === -1 (there is index for value)
  * * indexOf() > -1 return true , indexOf() === -1 if it is not present 
  * ! The ways to get last digit num
  * * str.lastIndexOf(searchElement) > -1 --> 구지 string 으로 변환?
  * * better way !
  * * num % 10 === searchElement 
  * * 2536%10 => quotient : 253 remainder : 6
  *  
  */
