// We have an numsay of length 2 * n (even length) that consists of random integers.

// [1, 3, 2, 6, 5, 4]

// We are asked to create pairs out of these integers, like such:

// [[1, 3], [2, 6], [5, 4]]

// How can we divide up the pairs such that the sum of smaller integers in each pair is maximized?

// Here's an example input: [3, 4, 2, 5].
// The return value is 6 because the maximum sum of pairs is 6 = min(2, 3) + min(4, 5).

// Note that negative numbers may also be included.

const maxOfMinPairs = (nums) => {
    if (nums.length === 0) return;

    let sortedArray = nums.sort();
    result = sortedArray[0];

    for (let i = 2; i < sortedArray.length; i += 2) {
        result += sortedArray[i];
    }

    return result;
}


console.log(maxOfMinPairs([ 3, 4, 2, 5 ]));
