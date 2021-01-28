// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)


const triangle = require('./index');

describe('Three given numbers can be triangle', ()=>{
    test('Three given numbers should be less then 100',()=>{
        expect(triangle(2,3,100)).toBeFalsy();
    })
    test('longest one should be less than sum of others', ()=>{
        expect(triangle(2,3,4)).toBe("YES");
    });
    test('if longest one is greater then sum of others should return No', ()=>{
        expect(triangle(13,33,17)).toBe("NO");
    })

});