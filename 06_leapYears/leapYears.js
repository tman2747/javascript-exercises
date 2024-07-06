/**
 * @param {number} year
 */
const leapYears = function(year) 
{
    if (year % 4 == 0 || year % 400 == 0)
    {
        if (year % 100 == 0 && year % 400 != 0)
        {
            return false
        }
        return true
        
    }
    return false
    
};
console.log(leapYears(1985))
// Do not edit below this line
module.exports = leapYears;
