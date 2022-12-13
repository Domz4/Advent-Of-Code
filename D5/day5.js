import inputInstructions from "./input.js";
const input = `move 1 from 3 to 5
move 7 from 9 to 5`;

const moves = inputInstructions.split("\n").map((str) => {
  const match = str.match(/move (\d+) from (\d+) to (\d+)/);
  return [Number(match[1]), Number(match[2]), Number(match[3])];
});

let crates = {
  Crate1: ["Z", "J", "N", "W", "P", "S"],
  Crate2: ["G", "S", "T"],
  Crate3: ["V", "Q", "R", "L", "H"],
  Crate4: ["V", "S", "T", "D"],
  Crate5: ["Q", "Z", "T", "D", "B", "M", "J"],
  Crate6: ["M", "W", "T", "J", "D", "C", "Z", "L"],
  Crate7: ["L", "P", "M", "W", "G", "T", "J"],
  Crate8: ["N", "G", "M", "T", "B", "F", "Q", "H"],
  Crate9: ["R", "D", "G", "C", "P", "B", "Q", "W"],
};

function moveCrates() {
  moves.forEach((e) => {
    for (let i = 0; i < e[0]; i++) {
      let temp = crates[`Crate${e[1]}`];
      let lastItem = temp.pop();
      crates[`Crate${e[2]}`].push(lastItem);
    }
  });
  console.log(crates);
}
function moveCratesT2() {
  moves.forEach((e) => {
    for (let i = 0; i < 1; i++) {
      let temp = crates[`Crate${e[1]}`];
      let lastItem = temp.splice(temp.length - e[0], e[0]);
      crates[`Crate${e[2]}`].push(...lastItem);
    }
  });
  console.log(crates);
}
moveCratesT2();
