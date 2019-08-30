// In a given array of numbers, one element will show up once and the rest will show up twice.
// Can you find that number in O(n) linear time?

// lonelyNumber([4, 4, 6, 1, 3, 1, 3])
// // 6

// lonelyNumber([3, 3, 9])
// // 9

const lonelyNumber = (nums) => {
    nums = nums.sort();

    let i = 0;
    let current = nums[i];

    while (i < nums.length - 2) {
        if (current === nums[i + 1]) {
            i += 2; // skip it
            current = nums[i];
        } else {
            return current;
        }
    }
    return current;
}
