function numberChecker(number) {
  if (number >= 10 &&
    typeof number === 'number'
  ) {
    return true;
  } else {
    return false;
  }
}

// Do not edit below this line
module.exports = numberChecker;
