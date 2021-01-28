const cloneArray = require('./index');

/**
 * 
 * ? toBe makes test fail. 
 * ! const array 랑 cloneArray(array) 의 리턴 값은 배열안의 값은 육안상 
 * ! 같지만 사실 다른 메모리 주소 값을 참조 하고 있다 . 그 이유는
 * ! cloneArray(array)는 새로운 배열을 return 하므로 다른 메모리 주소를 쓰기 때문.
 *    
 */

test('properly clones arrays',()=>{
    const array = [1,2,3]
    // expect(cloneArray(array)).toBe(array); fail to testing why? 
    // expect(cloneArray(array)).toEqual(array);
    expect(cloneArray(array)).not.toBe(array); //cloneArray !== array    
});