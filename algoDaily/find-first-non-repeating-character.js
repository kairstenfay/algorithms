// You're given a string of random alphanumerical characters with a length between 0 and 1000.

// Write a method to return the first character in the string that does not repeat itself later on.

// firstNonRepeat('asdfsdafdasfjdfsafnnunl') should return 'j'

const firstNonRepeat = (str) => {
    if (str.length === 0) return str;

    let stack = [...str];
    let nonRepeatingCharacters = [];

    while (stack.length > 0) {
        let temp = stack.pop();

        if (!nonRepeatingCharacters.includes(temp)) nonRepeatingCharacters.push(temp)
    }

    return nonRepeatingCharacters.pop();
}
