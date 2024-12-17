/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  let number = n.toString();
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    if (!isNaN(number[i])) {
      sum += parseInt(number[i]);
    }
  }
  return sum;
};
