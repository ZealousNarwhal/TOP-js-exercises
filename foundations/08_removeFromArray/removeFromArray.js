const removeFromArray = function(array, ...keyword) {
    return array.filter(val => !keyword.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
