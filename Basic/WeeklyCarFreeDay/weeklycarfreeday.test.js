// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)


const weeklyCarFreeDay = require('./index');

    test(' Should be a  two-digit given number',()=>{
        expect(weeklyCarFreeDay(3,[251, 21, 11, 47, 51, 17, 81])).toBe(0);
    });

    test(' Should return the number of cars which does not contain given number',()=>{
        expect(weeklyCarFreeDay(3,[25,43, 23, 11, 47, 53, 17, 33])).toBe(4)
    });

    test(' Should return 0 if any driving number does not contain any given number',()=>{
        expect(weeklyCarFreeDay(3,[25, 21, 11, 47, 51, 17, 81])).toBe(0)
    });

