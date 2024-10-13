/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  let sum = 0;
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    firstNumber = Number(firstNumber.replace(/[^0-9.-]/g, ''));
    secondNumber = Number(secondNumber.replace(/[^0-9.-]/g, ''));
    sum = firstNumber + secondNumber;
    return sum;
  } else {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    sum = firstNumber + secondNumber;
    return sum;
  }
};
