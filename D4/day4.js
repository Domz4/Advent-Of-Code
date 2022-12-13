import input from "./input.js";
const lilinput = `
2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8
6-7,7-7
2-5,5-89
58-95,58-59
39-93,92-93
11-82,81-82
12-37,13-58
53-92,52-91
1-19,3-18
90-91,91-98
20-72,19-71
91-91,1-92 
`;
// 91-91,1-92  1-19,3-18   11-82,81-82   39-93,92-93   58-95,58-59
//6-7,7-7    6-6,4-6   2-8,3-7

const transform = (input) => {
  let count = 0;
  let countOverlaping = 0;
  const arr = input
    .trim()
    .split(/[-,\n,]/gi)
    .map(Number);
  for (let i = 0; i <= input.length / 2; i += 4) {
    let temp = arr.slice(i);
    let [x1, x2, y1, y2] = temp;
    if ((x1 <= y1 && x2 >= y2) || (y1 <= x1 && y2 >= x2)) {
      count++;
    }
    if (x2 >= y1 && y2 >= x1) {
      console.log(x1, x2, y1, y2);
      countOverlaping++;
    }
  }

  return countOverlaping;
};
console.log(transform(input));
