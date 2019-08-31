// Can you implement the JS Map class from scratch?
// Only two methods are necessary-- get and set.
// Do not use JS Objects ({} notation) for this exercise.

// Note: Regular Javascript objects and the Map class are both simple key-value hash tables/associative arrays, with a few key differences:

// A Map object can iterate through its elements in insertion order, whereas JavaScript's Objects don't guarantee order.
// In addition, Objects have default keys due to their prototype, and Maps don't come with default keys.
// Here's a good breakdown of the two.
// For the purpose of this exercise, let's assume the same functionality for both.

// For the two methods you'll define:

//     get(key: string) should be given a key, and return the value for that key.
//     set(key: string, val: string) should take a key and a value as parameters, and store the pair.

// Additionally, we've supplied the below hashing function hashStr.
// It tries to avoid collision, but is not perfect.
// It takes in a string value and returns an integer.

// function hashStr(str) {
//     let finalHash = 0;
//     for (let i = 0; i < str.length; i++) {
//         const charCode = str.charCodeAt(i);
//         finalHash += charCode;
//     }
//     return finalHash;
// }

// console.log(hashStr('testKey'))

// Let's call our new class the Hashmap class:

// const m = new Hashmap();
// m.set('name', 'Jake');
// console.log(m.get('name'));

class Hashmap {
    constructor() {
        this._values = [];
    }

    /**
     * Given a key, returns the key's value in the hashmap.
     *
     * @param {string} key
     * @returns {string} - The value for that key in the hashmap.
     */
    get(key) {
        const hash = this.hashStr(key);
        return this._values[hash];
    }

    /**
     * Stores a key, value pair in the hashmap.
     *
     * @param {string} key
     * @param {string} val
     */
    set(key, val) {
        const hash = this.hashStr(key);
        this._values[hash] = val;
    }

    /**
     *
     * @param {string} str
     * @returns {int} - The character code of the string.
     */
    hashStr(str) {
        let finalHash = 0;
        for (let i = 0; i < str.length; i++) {
            const charCode = str.charCodeAt(i);
            finalHash += charCode;
        }
        return finalHash;
    }
}
