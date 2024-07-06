/**
 * @param {string} string
 */
const reverseString = function(string) {

    let reversedString = ''

    for (let index = string.length; index >= 0; index--) {
        reversedString += string.charAt(index)
    }

    return reversedString;
};

console.log(reverseString("hello"))
// Do not edit below this line
module.exports = reverseString;
