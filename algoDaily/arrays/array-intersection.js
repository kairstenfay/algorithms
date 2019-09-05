// Can you write a function that takes two inputs and returns their intersection? All element in the final result should be unique.

// const nums1 = [1, 2, 2, 1];
// const nums2 = [2, 2];

// intersection(nums1, nums2);
// // [2]

// Here's another one:

// const nums1 = [4,9,5];
// const nums2 = [9,4,9,8,4];

const intersection = (nums1, nums2) => {
    const intersection = nums1.filter(x => nums2.includes(x));
    return [...new Set(intersection)]
}
