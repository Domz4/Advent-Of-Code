const sample = `addx 2
addx 3
addx 3
addx -2
addx 4
noop
addx 1
addx 4
addx 1
noop
addx 4
addx 1
noop
addx 2
addx 5
addx -28
addx 30
noop
addx 5
addx 1
noop
addx -38
noop
noop
noop
noop
addx 5
addx 5
addx 3
addx 2
addx -2
addx 2
noop
noop
addx -2
addx 12
noop
addx 2
addx 3
noop
addx 2
addx -31
addx 32
addx 7
noop
addx -2
addx -37
addx 1
addx 5
addx 1
noop
addx 31
addx -25
addx -10
addx 13
noop
noop
addx 18
addx -11
addx 3
noop
noop
addx 1
addx 4
addx -32
addx 15
addx 24
addx -2
noop
addx -37
noop
noop
noop
addx 5
addx 5
addx 21
addx -20
noop
addx 6
addx 19
addx -5
addx -8
addx -22
addx 26
addx -22
addx 23
addx 2
noop
noop
noop
addx 8
addx -10
addx -27
addx 33
addx -27
noop
addx 34
addx -33
addx 2
addx 19
addx -12
addx 11
addx -20
addx 12
addx 18
addx -11
addx -14
addx 15
addx 2
noop
addx 3
addx 2
noop
noop
noop
addx -33
noop
addx 1
addx 2
noop
addx 3
addx 4
noop
addx 1
addx 2
noop
noop
addx 7
addx 1
noop
addx 4
addx -17
addx 18
addx 5
addx -1
addx 5
addx 1
noop
noop
noop
noop`;

function part1(input) {
  let loopCounter = 0;
  let sum = 1;
  let result = 0;
  const moves = input.split("\n").map((e) => {
    if (e === "noop") {
      const command = e;
      return { command, loop: 1 };
    } else {
      const [command, num] = e.split(" ");
      return { command, num: parseInt(num), loop: 2 };
    }
  });

  moves.forEach((e) => {
    if (e.command === "noop") {
      loopCounter++;
    } else if (e.command === "addx") {
      for (let i = 0; i < 2; i++) {
        loopCounter++;
        if (
          loopCounter === 20 ||
          loopCounter === 60 ||
          loopCounter === 100 ||
          loopCounter === 140 ||
          loopCounter === 180 ||
          loopCounter === 220
        ) {
          console.log(sum * loopCounter);
          result += sum * loopCounter;
        }
      }
      sum += e.num;
    }
  });
  return result;
}

function part2(input) {
  let cycle = 0;
  let sprite = 1;
  let drawing = "";
  const moves = input.split("\n").map((e) => {
    if (e === "noop") {
      const command = e;
      return { command, loop: 1 };
    } else {
      const [command, num] = e.split(" ");
      return { command, num: parseInt(num), loop: 2 };
    }
  });

  moves.forEach((e) => {
    if (cycle % 40 === 0 && cycle !== 0) {
      console.log(cycle);
      drawing += "\n";
      cycle = 0;
    }
    if (e.command === "noop") {
      cycle++;
      if (cycle === sprite || cycle === sprite + 1 || cycle === sprite + 2) {
        drawing += "█";
      } else {
        drawing += " ";
      }
    } else if (e.command === "addx") {
      for (let i = 0; i < 2; i++) {
        cycle++;
        if (cycle === sprite || cycle === sprite + 1 || cycle === sprite + 2) {
          drawing += "█";
        } else {
          drawing += " ";
        }
        if (cycle % 40 === 0 && cycle !== 0) {
          console.log(cycle);
          drawing += "\n";
          cycle = 0;
        }
      }

      sprite += e.num;
    }
  });
  return drawing;
}
console.log(part2(sample));
