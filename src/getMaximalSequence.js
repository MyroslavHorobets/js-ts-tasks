/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  function findMaxEqualSequence(arr) {
    if (arr.length === 0) {
      return [];
    }

    let maxSeq = []; // Для хранения максимальной последовательности
    let currentSeq = [arr[0]]; // Для текущей последовательности одинаковых элементов

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === arr[i - 1]) {
        // Если текущий элемент равен предыдущему, добавляем его в текущую последовательность
        currentSeq.push(arr[i]);
      } else {
        // Если текущая последовательность закончилась, сравниваем её с максимальной
        if (currentSeq.length > maxSeq.length) {
          maxSeq = currentSeq;
        }
        // Начинаем новую последовательность с текущего элемента
        currentSeq = [arr[i]];
      }
    }

    if (currentSeq.length > maxSeq.length) {
      maxSeq = currentSeq;
    }

    return maxSeq;
  }
};
