// Here's the definition of an anagram: a word, phrase, or name formed by rearranging the letters of
// another, such as cinema, formed from iceman.

// We are given two strings like "cinema" and "iceman" as inputs.
// Can you write a method isAnagram(str1, str2) that will return true or false depending on whether
// the strings are anagrams of each other?

const isAnagram = (str1, str2) => {
    let strings = [str1, str2].map((string) => {
        string = string.toLowerCase();
        return string.split('').sort().join('');
    });

    return strings[0] === strings[1];
}

console.log(isAnagram('cinema', 'iceman'));
