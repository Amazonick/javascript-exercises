const palindromes = function (string) {
    const onlyLetters = string.toLowerCase().match(/[a-z0-9]/g);
    return onlyLetters.join('') === onlyLetters.reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
