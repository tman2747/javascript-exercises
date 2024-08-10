const fibonacci = function (number) 
{
    if (number < 0)
    {
        return ("OOPS")
    }
    currentNumber = 1
    prevNumber = 0
    total = 0

    if (number == 0)
    {
        return 0  
    }
    for (let index = 1; index < number; index++)
    {
        total = prevNumber + currentNumber
        prevNumber = currentNumber
        currentNumber = total
        console.log(currentNumber)
        // > In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.
    }
    return currentNumber
};

fibonacci() // to be 3

// Do not edit below this line
module.exports = fibonacci;
