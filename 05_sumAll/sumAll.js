/**
 * Calculates the sum of all integers between start and end, inclusive.
 * If start is greater than end, their values are swapped.
 * 
 * @param {number} start - The starting integer.
 * @param {number} end - The ending integer.
 * @returns {number} The sum of all integers between start and end.
 */
const sumAll = function (start, end)
{
    let sumAll = 0;
    let lowNumber = start
    let highNumber = end
    if (highNumber < lowNumber)
    {
        let temp = highNumber
        highNumber = lowNumber
        lowNumber = temp
    }
    if (lowNumber < 0 || highNumber < 0)
    {
        return "ERROR"
    }
    if (!Number.isInteger(lowNumber) || !Number.isInteger(highNumber))
    {
        return "ERROR"
    }

    for (let i = lowNumber; i <= highNumber; i++)
    {
        sumAll += i;
    }
    return sumAll
};
sumAll(1, 4)
// Do not edit below this line
module.exports = sumAll;
