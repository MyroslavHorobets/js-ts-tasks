/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  return arr.filter(item => {
    // For objects, we check if the items are deeply equal using JSON.stringify.
    if (typeof value === 'object' && value !== null) {
      if (typeof item === 'object' && item !== null) {
        return JSON.stringify(item) !== JSON.stringify(value); // Deep comparison for objects
      }
    }
    return item !== value; // For primitives, perform direct comparison
  });
};
