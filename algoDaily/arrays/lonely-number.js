// In a given array of numbers, one element will show up once and the rest will show up twice.
// Can you find that number in O(n) linear time?

// lonelyNumber([4, 4, 6, 1, 3, 1, 3])
// // 6

// lonelyNumber([3, 3, 9])
// // 9

const lonelyNumber = (numbers) => {
    return numbers.reduce((acc, current) => acc ^ current, undefined);
}
