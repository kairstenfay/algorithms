// How would you write a function to detect a substring in a string?

// If the substring can be found in the string, return the index at which it starts.
// Otherwise, return -1.

// function detectSubstring(str, subStr) {
//   return -1;
// }

// Important-- do not use the native String class's built-in substring or substr method.

const detectSubstring = (str, subStr) => {
    let subStrStartIndex = -1;
    i = 0;
    j = 0;

    while (i < str.length && j < subStr.length) {
        if (str[i] === subStr[j]) {
            subStrStartIndex = subStrStartIndex === -1 ? i : subStrStartIndex;
            j++;
        } else subStrStartIndex = -1;

        i++;
    }

    return subStrStartIndex;
}


console.log(detectSubstring('thepigflewwow', 'flew'));
