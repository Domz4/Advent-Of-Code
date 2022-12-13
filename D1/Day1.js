import listOfFood from "./Input.js";

const longWordTransformation = (arr, word) => {
  const summedArray = word
    .split("\n")
    .map((str) => Number(str))
    .reduce((s, n) => {
      s += n;
      if (n === 0) {
        arr.push(s);
        s = 0;
      }
      return s;
    }, 0);
  const result = arr.concat(summedArray);
  return Math.max(...result);
};

console.log(longWordTransformation([], listOfFood));

const sumOfTopThree = (arr, word) => {
  const summedArray = word
    .split("\n")
    .map((str) => Number(str))
    .reduce((s, n) => {
      s += n;
      if (n === 0) {
        arr.push(s);
        s = 0;
      }
      return s;
    }, 0);
  const sortedArr = arr.concat(summedArray).sort((a, b) => b > a);
  const result = sortedArr[0] + sortedArr[1] + sortedArr[2];
  return result;
};

console.log(sumOfTopThree([], listOfFood));
