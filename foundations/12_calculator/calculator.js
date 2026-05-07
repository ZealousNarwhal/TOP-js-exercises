const add = function(a, b) {
	return (typeof(a) === "number" && typeof(b) === "number") ? a + b : false;
};

const subtract = function(a, b) {
	return (typeof(a) === "number" && typeof(b) === "number") ? a - b : false;
};

const sum = function(array) {
  return array.filter((element) => typeof(element) === "number")
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(array) {
  return array.filter((element) => typeof(element) === "number")
  .reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};

const power = function(a, b) {
	return (typeof(a) === "number" && typeof(b) === "number") ? a ** b : false;
};

const factorial = function(x) {
  if(typeof(x) ==="number"){
    return (x < 2) ? 1 : x*factorial(x-1);
  }
	else {
    return false;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
