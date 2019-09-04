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

const getFinalStr = (array) => {
    let result = [];

    while (array.length > 0) {
        const char = array.splice(0, 1);

        if (String(char) === '$') result.pop();
        else result = result.concat(char);
    }

    return result.join('');
}

const isDollarDeleteEqual = (arr) => {
    let firstString = getFinalStr([...arr[0]]);
    let secondString = getFinalStr([...arr[1]]);

    return firstString === secondString;
}
