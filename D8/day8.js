import input from "./input.js";
const lilinput = `
30373
25512
65332
33549
35390
`;
function treeChecker(input) {
  const arr = input
    .trim()
    .split("\n")
    .map((e) => e.split("").map(Number));
  let counter = arr.length * 4 - 4;
  const mapa = input
    .trim()
    .split("\n")
    .map((e) => e.split("").map((elem) => (elem = 0)));
  let top = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let left = arr[i][0];
    for (let j = 0; j < arr.length; j++) {
      if (
        top[j] < arr[i][j] &&
        i >= 1 &&
        i < arr.length - 1 &&
        j >= 1 &&
        j < arr.length - 1
      ) {
        top[j] = arr[i][j];
        mapa[i][j] = 1;
      }
      if (
        left < arr[i][j] &&
        i >= 1 &&
        i < arr.length - 1 &&
        j >= 1 &&
        j < arr.length - 1
      ) {
        left = arr[i][j];
        mapa[i][j] = 1;
      }
    }
  }
  let bot = arr[arr.length - 1];
  for (let i = arr.length - 1; i >= 0; i--) {
    let right = arr[i][arr.length - 1];
    for (let j = arr.length - 1; j >= 0; j--) {
      if (
        bot[j] < arr[i][j] &&
        i >= 1 &&
        i < arr.length - 1 &&
        j >= 1 &&
        j < arr.length - 1
      ) {
        bot[j] = arr[i][j];
        mapa[i][j] = 1;
      }
      if (
        right < arr[i][j] &&
        i >= 1 &&
        i < arr.length - 1 &&
        j >= 1 &&
        j < arr.length - 1
      ) {
        right = arr[i][j];
        mapa[i][j] = 1;
      }
    }
  }
  mapa.forEach((e) =>
    e.forEach((elem) => {
      if (elem === 1) counter++;
    })
  );
  return counter;
}
function part2(input) {
  const result = input
    .trim()
    .split("\n")
    .map((row, y, rows) => {
      return Math.max(
        ...[...row].map((tree, x) => {
          let right = 0;
          for (let i = x + 1; i < row.length; i++) {
            right++;
            if (+row[i] >= +tree) break;
          }
          let left = 0;
          for (let i = x - 1; i >= 0; i--) {
            left++;
            if (+row[i] >= +tree) break;
          }
          let down = 0;
          for (let i = y + 1; i < rows.length; i++) {
            down++;
            if (+rows[i][x] >= +tree) break;
          }
          let up = 0;
          for (let i = y - 1; i >= 0; i--) {
            up++;
            if (+rows[i][x] >= +tree) break;
          }
          return left * right * up * down;
        }, 0)
      );
    }, 0);

  return Math.max(...result);
}

console.log(part2(input));


