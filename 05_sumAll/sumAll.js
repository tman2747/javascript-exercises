const sumAll = function(start,end) {
    let sumAll = 0;
    for (let i = start; i <= end; i++)
    {
        sumAll += i;
    }
    return sumAll
};
sumAll(1,4)
// Do not edit below this line
module.exports = sumAll;
