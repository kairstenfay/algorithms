// We're provided a positive integer num.
// Can you write a method to repeatedly add all of its digits until the result has only one digit?

// Here's an example: if the input was 49, we'd go through the following steps:

// // start with 49
// 4 + 9 = 13

// // move onto 13
// 1 + 3 = 4

// We would then return 4.

const sumDigits = (num) => {
    let digits = [...num.toString()];
    let current;

    while (digits.length > 1) {
        current = digits.reduce((a, b) => Number(a) + Number(b));
        digits = [...current.toString()];
    }

    return Number(digits.join());
}
