// You're given an array of strings containing alphabetical characters and certain $ characters.
// A $ represents a DELETE action whereby the character before it is deleted.

// Each of these strings will be run through a method to operate on the $ DELETE action.
// We want to find out if the final string is the same for all of them.
// Let's take an example:

// const input = ["f$st", "st"]
// isDollarDeleteEqual(input);
// // true
// // true because both become "st"

// Given the below function signature, can you find a solution in O(n) time and constant space?

// function isDollarDeleteEqual(arr) {
//   return;
// }

const getFinalStr = (string) => {
    let result = [];

    for (let i = 0; i < string.length; i++) {
        if (string[i] === '$') result.pop();
        else result.push(string[i]);
    }

    return result.join('');
}

const isDollarDeleteEqual = (arr) => {
    const strings = arr.map((string) => getFinalStr(string));
    return strings.every((string) => string === strings[0]);
}

console.log(isDollarDeleteEqual(["f$st", "st"]));
