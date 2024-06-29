const repeatString = function (string, num) {
    let finalstring = ''

    if (num < 0) {
        return "ERROR"
    }
    for (let i = 0; i < num; i++) {
        finalstring += string
    }
    return finalstring

};

// Do not edit below this line
module.exports = repeatString;
