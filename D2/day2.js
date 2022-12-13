import input from "./input.js";

const workingInput = `
B Y
A Z
A Z
A Y
A Y
C Z
A Z
A Z
B Y
C X
C Z
C Z
C Z
A Y
A Z
`;
// A - Rock, B - Pejper, C - Scissors, X - Rock, Y - Pejper, Z - Scissors;
// win 6 draw 3 lost 0, 1 rock 2 pejper 3 scisors
function totalScore(inp) {
  const result = inp
    .trim()
    .split("\n")
    .reduce((sum, num) => {
      return num === "B X"
        ? (sum += 1)
        : num === "C Y"
        ? (sum += 2)
        : num === "A Z"
        ? (sum += 3)
        : num === "A X"
        ? (sum += 4)
        : num === "B Y"
        ? (sum += 5)
        : num === "C Z"
        ? (sum += 6)
        : num === "C X"
        ? (sum += 7)
        : num === "A Y"
        ? (sum += 8)
        : num === "B Z"
        ? (sum += 9)
        : sum;
    }, 0);
  return result;
}
function totalScoreStrat(inp) {
  const result = inp
    .trim()
    .split("\n")
    .reduce((sum, num) => {
      return num === "A X"
        ? (sum += 3)
        : num === "A Y"
        ? (sum += 4)
        : num === "A Z"
        ? (sum += 8)
        : num === "B X"
        ? (sum += 1)
        : num === "B Y"
        ? (sum += 5)
        : num === "B Z"
        ? (sum += 9)
        : num === "C X"
        ? (sum += 2)
        : num === "C Y"
        ? (sum += 6)
        : num === "C Z"
        ? (sum += 7)
        : sum;
    }, 0);
  return result;
}
// pairs with enemy:me battles each one defines number of point and there is
console.log(totalScoreStrat(input));
13809;
12316;
