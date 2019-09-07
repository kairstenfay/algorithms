// Assume we're given an unsorted array of numbers such as this:

// [ 2, 5, 1, 4, 9, 6, 3, 7 ]

// We are told that there are a series of n consecutive numbers, with a lower bound and upper bound.

// There is one consecutive number missing.
// In this case, if the lower bound is 1 and the upper bound is 9, it's 8.

// const arr = [ 2, 5, 1, 4, 9, 6, 3, 7 ];
// const lowerBound = 1;
// const upperBound = 9;

// missingInUnsorted(arr, lowerBound, upperBound);
// // 8

// Can you find the missing number in O(n) time?
// Can you do it without sorting?

const missingInUnsorted = (arr, lowerBound, upperBound) => {
    const slots = upperBound - lowerBound + 1;
    const zeroIndexed = 0 - lowerBound;
    let nums = [...Array(slots).keys()];

    for (let num of arr) {
        nums[num + zeroIndexed] = undefined;
    }

    const missingNumber = nums.find((n) => { return n !== undefined });
    return missingNumber - zeroIndexed;
}

console.log(missingInUnsorted([ 2, 5, 1, 4, 9, 6, 3, 7 ], 1, 9));
