const fibonacci = function(x) {
    const cleanNumber = parseInt(x);
    console.log(cleanNumber);
    if(cleanNumber < 0)return "OOPS";
    else if(cleanNumber === 0) return 0;

    let lastNumber = 1;
    let secondLastNumber = 1;
    let result = 1;
    for(let i = 2; i < cleanNumber; i++) { //skip the first two numbers (they are always 1)
        result = lastNumber + secondLastNumber;
        secondLastNumber = lastNumber;
        lastNumber = result;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
