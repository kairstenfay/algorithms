// Here's the definition of an anagram: a word, phrase, or name formed by rearranging the letters of
// another, such as cinema, formed from iceman.

// We are given two strings like "cinema" and "iceman" as inputs.
// Can you write a method isAnagram(str1, str2) that will return true or false depending on whether
// the strings are anagrams of each other?

const isAnagram = (str1, str2) => {
    let stack = str1.toLowerCase().split('');
    let array = str2.toLowerCase().split('');

    while (array.length > 1) {
        let index = array.indexOf(stack.pop());

        if (index === -1) return false;
        array.splice(index, 1);
    }
    return array[0] == stack[0];
}
