const sample = `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`;
import input from "./input.js";
function part1(input) {
  const moves = input.split("\n").map((e) => {
    let [dir, num] = e.split(" ");
    return { dir, num: parseInt(num) };
  });
  console.log(moves);
  let H = { x: 0, y: 0 };
  let T = { x: 0, y: 0 };
  let dir = {
    L: { x: -1, y: 0 },
    R: { x: 1, y: 0 },
    D: { x: 0, y: -1 },
    U: { x: 0, y: 1 },
  };
  let pos = new Set(["0,0"]);
  moves.forEach((e) => {
    for (let step = 0; step < e.num; step++) {
      H.x += dir[e.dir].x;
      H.y += dir[e.dir].y;
      console.log(H.y - T.y);

      let distX = H.x - T.x;
      let distY = H.y - T.y;

      if (Math.abs(distX) >= 2) {
        T.x += Math.sign(distX);
        if (Math.abs(distY) != 0) T.y += Math.sign(distY);
      } else if (Math.abs(distY) >= 2) {
        T.y += Math.sign(distY);
        if (Math.abs(distX) != 0) T.x += Math.sign(distX);
      }

      pos.add(`${T.x},${T.y}`);
    }
  });

  return pos.size;
}

function part2(input) {
  const moves = input.split("\n").map((e) => {
    let [dir, num] = e.split(" ");
    return { dir, num: parseInt(num) };
  });
  let rope = new Array(10).fill(0).map((e) => {
    return { x: 0, y: 0 };
  });
  console.log(rope);
  let dir = {
    L: { x: -1, y: 0 },
    R: { x: 1, y: 0 },
    D: { x: 0, y: -1 },
    U: { x: 0, y: 1 },
  };

  let pos = new Set(["0,0"]);
  moves.forEach((move) => {
    for (let step = 0; step < move.num; step++) {
      rope[0].x += dir[move.dir].x;
      rope[0].y += dir[move.dir].y;

      for (let i = 1; i < rope.length; i++) {
        let distX = rope[i - 1].x - rope[i].x;
        let distY = rope[i - 1].y - rope[i].y;

        if (Math.abs(distX) >= 2) {
          rope[i].x += Math.sign(distX);
          if (Math.abs(distY) != 0) rope[i].y += Math.sign(distY);
        } else if (Math.abs(distY) >= 2) {
          rope[i].y += Math.sign(distY);
          if (Math.abs(distX) != 0) rope[i].x += Math.sign(distX);
        }
      }

      pos.add(`${rope[rope.length - 1].x},${rope[rope.length - 1].y}`);
    }
  });

  return pos.size;
}

console.log(part2(input));
