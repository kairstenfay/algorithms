// Write a function that reverses an inputted string without using the built-in Array#reverse method.
// So, for example, calling:

// reverseString("jake") should return "ekaj".

// reverseString("reverseastring") should return "gnirtsaesrever".

const reverseString = (str) => {
    let array = [...str];
    let result = [];

    while (array.length > 0) {
        result.push(array.pop());
    }

    return result.join('');
}
