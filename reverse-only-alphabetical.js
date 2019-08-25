// You are given a string that contains alphabetical characters (a - z, A - Z) and some other characters ($, !, etc.).
// For example, one input may be:

// 'sea!$hells3'

// Can you reverse only the alphabetical ones?

// reverseOnlyAlphabetical('sea!$hells3');
// // 'sll!$ehaes3'

const reverseOnlyAlphabetical = (str) => {
    let reverse = str.match(/[a-z]/ig);

    for (let i = 0; i < reverse.length / 2; i++) {
        if (i < reverse.length / 2) {
            let temp = reverse[i];
            reverse[i] = reverse[reverse.length - 1 - i];
            reverse[reverse.length - 1 - i] = temp;
        }
    }

    let result = '';

    let i = 0;
    let j = 0;
    while (i < str.length || j < reverse.length) {
        if (reverse.indexOf(str[i]) === -1) {
            result += str[i];
            i++;
        } else {
            result += reverse[j];
            j++;
            i++;
        }
    }
    return result;
}
