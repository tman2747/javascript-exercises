/**
 * Removes all occurrences of an item from an array.
 * @param {Array} array - The array from which to remove items.
 * @param {*} itemToRemove - The item to remove from the array.
 */
const removeFromArray = function(array, ...itemToRemove) {

    let cleanArray = array
    // current problem is that if theres another item right after the index it deletes
    for (let index = array.length; index >= 0; index--)
    {
        for (let r = 0; r < itemToRemove.length; r++)
        {
            if (itemToRemove[r] === array[index])
                {
                    cleanArray.splice(index,1)
                }
        }
    }
    return cleanArray
};

console.log(removeFromArray([1,2,2,3,4,2,5],2,3))
// Do not edit below this line
module.exports = removeFromArray;
