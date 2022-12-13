let item = 0;
const input = [
  {
    items: [54, 61, 97, 63, 74],
    Operation: `item * 7`,
    Test: 17,
    T: 5,
    F: 3,
    inspect: 0,
  },

  {
    items: [61, 70, 97, 64, 99, 83, 52, 87],
    Operation: `item + 8`,
    Test: 2,
    F: 6,
    T: 7,
    inspect: 0,
  },
  {
    items: [60, 67, 80, 65],
    Operation: `item * 13`,
    Test: 5,
    T: 1,
    F: 6,
    inspect: 0,
  },
  {
    items: [61, 70, 76, 69, 82, 56],
    Operation: `item + 7`,
    Test: 3,
    T: 5,
    F: 2,
    inspect: 0,
  },
  {
    items: [79, 98],
    Operation: `item + 2`,
    Test: 7,
    T: 0,
    F: 3,
    inspect: 0,
  },
  {
    items: [72, 79, 55],
    Operation: `item + 1`,
    Test: 13,
    T: 2,
    F: 1,
    inspect: 0,
  },
  {
    items: [63],
    Operation: `item + 4`,
    Test: 19,
    T: 7,
    F: 4,
    inspect: 0,
  },

  {
    items: [72, 51, 93, 63, 80, 86, 81],
    Operation: `item * item`,
    Test: 11,
    T: 0,
    F: 4,
    inspect: 0,
  },
];

const sample = [
  {
    items: [79, 98],
    Operation: `item*19`,
    Test: 23,
    T: 2,
    F: 3,
    inspect: 0,
  },
  {
    items: [54, 65, 75, 74],
    Operation: `item+6`,
    Test: 19,
    T: 2,
    F: 0,
    inspect: 0,
  },
  {
    items: [79, 60, 97],
    Operation: `item*item`,
    Test: 13,
    T: 1,
    F: 3,
    inspect: 0,
  },
  { items: [74], Operation: `item+ 3`, Test: 17, T: 0, F: 1, inspect: 0 },
];

function part1(input) {
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < input.length; i++) {
      for (let k = input[i].items.length - 1; k >= 0; k--) {
        item = input[i].items.shift();

        let changedLevel = Math.floor(eval(input[i].Operation)/2);
        input[i].inspect++;

        if (changedLevel % input[i].Test === 0) {
          input[input[i].T].items.push(changedLevel);
        } else {
          input[input[i].F].items.push(changedLevel);
        }
      }
    }
  }
  for (let i = 0; i < input.length; i++) {
  }
}
function part2(input) {
  for (let j = 0; j < 10000; j++) {
    for (let i = 0; i < input.length; i++) {
      for (let k = input[i].items.length - 1; k >= 0; k--) {
        item = input[i].items.shift();
        let changedLevel = Math.floor(eval(input[i].Operation))  % 9699690;
        input[i].inspect++;
        if (changedLevel % input[i].Test === 0) {
          input[input[i].T].items.push(changedLevel);
        } else {
          input[input[i].F].items.push(changedLevel);
        }
      }
    }
  }
  for (let i = 0; i < input.length; i++) {
    console.log(input[i]);
  }
}
console.log(part2(input));
