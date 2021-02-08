// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)



const {replaceToCapitalLetter} = require("./index");
const genChar = () => {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let str='';

    for(let i=0; i<=4; i++){
       str += str.charAt( Math.floor(Math.random() * alphabet.length )) 
    }
    return str;
}


describe('Replace to Capital Letter', () => {
    it('should return falthy when the length is over 100 or 0', () => {
        expect(replaceToCapitalLetter(genChar())).toBeFalsy();
    })
    test('lowercase string to Uppercase',()=>{
        expect(replaceToCapitalLetter('ItisTimeToStudy')).toBe('ITISTIMETOSTUDY')
    })
    
    test('lowercase string to Uppercase',()=>{
        expect(replaceToCapitalLetter('ItisTimeToStudy')).toBeFalsy()
    })
    
});