// We have an array of length 2 * n (even length) that consists of random integers.

// [1, 3, 2, 6, 5, 4]

// We are asked to create pairs out of these integers, like such:

// [[1, 3], [2, 6], [5, 4]]

// How can we divide up the pairs such that the sum of smaller integers in each pair is maximized?

// Here's an example input: [3, 4, 2, 5].
// The return value is 6 because the maximum sum of pairs is 6 = min(2, 3) + min(4, 5).

// Note that negative numbers may also be included.

const maxOfMinPairs = (arr) => {
    if (arr.length === 0) return;

    let sortedArray = arr.sort();

    let pairs = [];
    while (sortedArray.length > 0) {
        pairs.push(sortedArray.splice(0, 2));
    }

    let result = Math.min(pairs[0][0], pairs[0][1]);

    for (let i = 1; i < pairs.length; i++) {
        result += Math.min(pairs[i][0], pairs[i][1]);
    }

    return result;
}


console.log(maxOfMinPairs([ 3, 4, 2, 5 ]));
