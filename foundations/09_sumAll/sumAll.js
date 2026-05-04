const sumAll = function(min, max) {
    if(!Number.isInteger(min) || !Number.isInteger(max) || min < 0 || max < 0)
    {
        return "ERROR";
    }

    if (min > max)
    {
        let temp = min;
        min = max;
        max = temp;
    }

    let result = 0;
    for(let i = min; i <= max; i++) {
        result += i;
    };

    return result;
};

// Do not edit below this line
module.exports = sumAll;
