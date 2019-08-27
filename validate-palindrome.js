// Given a string str, can you write a method that will return True if is a palindrome and False if it is not?
// If you'll recall, a palindrome is defined as "a word, phrase, or sequence that reads the same backward as forward".
// For now, assume that we will not have input strings that contain special characters or spaces, so the following examples hold:

// let str = 'thisisnotapalindrome';
// isPalindrome(str);
// // false

// str = 'racecar';
// isPalindrome(str);
// // true

// For an extra challenge, try to ignore non-alphanumerical characters.
// The final solution that we present will handle all edge cases.

const isPalindrome = (str) => {
    str = str.toLowerCase().match(/[a-z]/g);

    let array = str;
    let stack = str;

    while (array.length > 0) {
        if (array[0] !== stack.pop()) return false;
        array.splice(0, 1);
    }

    return true;
}

console.log(isPalindrome('A Santa Live a Devil At NASA'));
