const palindromes = function (string) {
    const cleanString = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, ""); //regex still scares me :(
    console.log(cleanString);
    for(let i = 0; i < (cleanString.length/2); i++)
    {
        if(cleanString.at(i) !== cleanString.at(-i-1))
        {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
