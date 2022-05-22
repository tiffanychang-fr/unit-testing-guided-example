function sum(a, b) {
  if (!a && !b) {
    return 0;
  }

  if (!b) {
    return a;
  }

  return a + b;
}

function subtract(a, b) {
  if (!a && !b) {
    return 0;
  }

  if (!b) {
    return a;
  }

  return a - b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('An explanatory error message');
  }

  return a / b;
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
