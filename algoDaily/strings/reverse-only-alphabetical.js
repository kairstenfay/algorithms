// You are given a string that contains alphabetical characters (a - z, A - Z)
// and some other characters ($, !, etc.).
// For example, one input may be:

// 'sea!$hells3'

// Can you reverse only the alphabetical ones?

// reverseOnlyAlphabetical('sea!$hells3');
// // 'sll!$ehaes3'

const reverseOnlyAlphabetical = (str) => {
    let alphaChars = str.match(/[a-z]/ig);
    let result = str.split('');

    for (let i = 0; i < result.length; i++) {
        if (result[i].toLowerCase() === result[i].toUpperCase()) {
            continue;
        } else {
            result[i] = alphaChars.pop();
        }
    }
    return result.join('');
}
