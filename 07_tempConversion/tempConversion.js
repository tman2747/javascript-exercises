/**
 * 
 * @param {number} temp 
 */
const convertToCelsius = function(temp)
{
return Math.round(((temp - 32.0) * 5/9)*10)/10
};

const convertToFahrenheit = function(temp)
{
  return Math.round(((temp * 9/5) + 32)*10)/10
};

console.log(convertToFahrenheit(21))
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
