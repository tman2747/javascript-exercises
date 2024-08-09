const palindromes = function (string)
{
    let stringArray = []
    for (let i = 0; i < string.length; i++)
    {
        if (/^[a-z0-9]+$/i.test(string[i]))
        {
            stringArray.push(string[i].toLowerCase());
        }

    }
    const testArray = JSON.parse(JSON.stringify(stringArray)).reverse();
    for (let i = 0; i < stringArray.length; i++)
    {
        if(stringArray[i] == testArray[i])
        {
            console.log(`${stringArray[i]} == ${testArray[i]}`)
            continue;
        }
        return false
    }

    return true
};

console.log(palindromes('A car, a man, a maraca.'))
// Do not edit below this line
module.exports = palindromes;
