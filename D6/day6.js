import input from "./input.js";

function part1(data) {
  for (let i = 4; i < data.length; i++) {
    let marker = data.slice(i - 4, i);
    if (new Set(marker).size === 4) {
      return i;
    }
  }
}
function isUnique(array) {
  return new Set(array).size === array.length;
}
function part2() {
  const windowLength = 14;
  let slidingWindow = [];
  for (let i = 0; i < input.length; i++) {
    slidingWindow.push(input[i]);
    if (slidingWindow.length > windowLength) {
      slidingWindow.shift();
    }
    if (slidingWindow.length === windowLength && isUnique(slidingWindow)) {
      console.log(i + 1);
      break;
    }
  }
}
console.log(part2(input));
