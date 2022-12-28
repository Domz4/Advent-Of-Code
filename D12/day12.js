const input = `
abccccaaaaaaacccaaaaaaaccccccccccccccccccccccccccccccccccaaaa
abcccccaaaaaacccaaaaaaaaaaccccccccccccccccccccccccccccccaaaaa
abccaaaaaaaaccaaaaaaaaaaaaaccccccccccccccccccccccccccccaaaaaa
abccaaaaaaaaaaaaaaaaaaaaaaacccccccccaaaccccacccccccccccaaacaa
abaccaaaaaaaaaaaaaaaaaacacacccccccccaaacccaaaccccccccccccccaa
abaccccaaaaaaaaaaaaaaaacccccccccccccaaaaaaaaaccccccccccccccaa
abaccccaacccccccccaaaaaacccccccccccccaaaaaaaacccccccccccccccc
abcccccaaaacccccccaaaaaaccccccccijjjjjjaaaaaccccccaaccaaccccc
abccccccaaaaacccccaaaacccccccciiijjjjjjjjjkkkkkkccaaaaaaccccc
abcccccaaaaacccccccccccccccccciiiirrrjjjjjkkkkkkkkaaaaaaccccc
abcccccaaaaaccccccccccccccccciiiirrrrrrjjjkkkkkkkkkaaaaaccccc
abaaccacaaaaacccccccccccccccciiiqrrrrrrrrrrssssskkkkaaaaacccc
abaaaaacaaccccccccccccccccccciiiqqrtuurrrrrsssssskklaaaaacccc
abaaaaacccccccccccaaccccccccciiqqqttuuuurrssusssslllaaccccccc
abaaaaaccccccccaaaaccccccccciiiqqqttuuuuuuuuuuusslllaaccccccc
abaaaaaacccccccaaaaaaccccccciiiqqqttxxxuuuuuuuusslllccccccccc
abaaaaaaccccaaccaaaaacccccchhiiqqtttxxxxuyyyyvvsslllccccccccc
abaaacacccccaacaaaaaccccccchhhqqqqttxxxxxyyyyvvsslllccccccccc
abaaacccccccaaaaaaaacccccchhhqqqqtttxxxxxyyyvvssqlllccccccccc
abacccccaaaaaaaaaaccaaacchhhpqqqtttxxxxxyyyyvvqqqlllccccccccc
SbaaacaaaaaaaaaaaacaaaaahhhhppttttxxEzzzzyyvvvqqqqlllcccccccc
abaaaaaaacaaaaaacccaaaaahhhppptttxxxxxyyyyyyyvvqqqlllcccccccc
abaaaaaaccaaaaaaaccaaaaahhhppptttxxxxywyyyyyyvvvqqqmmcccccccc
abaaaaaaacaaaaaaacccaaaahhhpppsssxxwwwyyyyyyvvvvqqqmmmccccccc
abaaaaaaaaaaaaaaacccaacahhhpppssssssswyyywwvvvvvqqqmmmccccccc
abaaaaaaaacacaaaacccccccgggppppsssssswwywwwwvvvqqqqmmmccccccc
abcaaacaaaccccaaaccccccccgggppppppssswwwwwrrrrrqqqmmmmccccccc
abcaaacccccccccccccccccccgggggpppoosswwwwwrrrrrqqmmmmddcccccc
abccaacccccccccccccccccccccgggggoooosswwwrrrnnnmmmmmddddccccc
abccccccccccccccccccccccccccgggggooossrrrrrnnnnnmmmddddaccccc
abaccccaacccccccccccccccccccccgggfoossrrrrnnnnndddddddaaacccc
abaccaaaaaaccccccccccccccccccccgffooorrrrnnnneeddddddaaaacccc
abaccaaaaaacccccccccccccccccccccfffooooonnnneeeddddaaaacccccc
abacccaaaaaccccccccaaccaaaccccccffffoooonnneeeeccaaaaaacccccc
abcccaaaaacccccccccaaccaaaaccccccffffoooneeeeeaccccccaacccccc
abaccaaaaaccccccccaaaacaaaaccccccafffffeeeeeaaacccccccccccccc
abacccccccccccccccaaaacaaacccccccccffffeeeecccccccccccccccaac
abaaaacccccccaaaaaaaaaaaaaacccccccccfffeeeccccccccccccccccaaa
abaaaacccccccaaaaaaaaaaaaaaccccccccccccaacccccccccccccccccaaa
abaacccccccccaaaaaaaaaaaaaaccccccccccccaacccccccccccccccaaaaa
abaaaccccccccccaaaaaaaaccccccccccccccccccccccccccccccccaaaaaa
`;
const sample = `
Sabqponm
abcryxxl
accszExk
acctuvwj
abdefghi
`;
function part1(input) {
  const graph = input
    .trim()
    .split("\n")
    .map((string) => {
      return string.split("").map((e) => {
        if (e === "S") {
          return 0;
        } else if (e === "E") {
          return "E";
        } else {
          let result = e.charCodeAt() - 96;
          return result;
        }
      });
    });
  const queue = [[0, 0]];
  const visited = new Array(...queue);
  while (queue.length > 0) {
    let current = queue.shift();
    for (let i = 0; i <= 3; i++) {
      let neighbour = neighbours(current).heights[i];
      let index = neighbours(current).index[i];
      let wall = neighbours(current).walls;
      if (neighbour === "E" && graph[current[0]][current[1]] === 25) {
        return (queue = []);
      }
      if (
        !visited.some((arr) => {
          if (arr === null) return;
          else arr.every((val, index) => val === [1, 0][index]);
        })
      )
        if (wall && index !== null) {
          switch (i) {
            case 0: {
              queue.push(index);
              visited.push(index);
              break;
            }
            case 1: {
              queue.push(index);
              visited.push(index);
              break;
            }
            case 2: {
              queue.push(index);
              visited.push(index);
              break;
            }
            case 3: {
              queue.push(index);
              visited.push(index);
              break;
            }
          }
        }
    }
  }

  function neighbours(current) {
    const left = current[1] > 0 ? graph[current[0]][current[1] - 1] : null;
    const right =
      current[1] < graph[0].length - 1
        ? graph[current[0]][current[1] + 1]
        : null;
    const bottom =
      current[0] < graph.length - 1 ? graph[current[0] + 1][current[1]] : null;
    const top = current[0] > 0 ? graph[current[0] - 1][current[1]] : null;

    const idxLeft = current[1] > 0 ? [current[0], current[1] - 1] : null;
    const idxRight =
      current[1] < graph[0].length - 1 ? [current[0], current[1] + 1] : null;
    const idxTop = current[0] > 0 ? [current[0] - 1, current[1]] : null;
    const idxBottom =
      current[0] < graph.length - 1 ? [current[0] + 1, current[1]] : null;
    const canLeft = left - graph[current[0]][current[1]] < 2 && left !== null;
    const canRight =
      right - graph[current[0]][current[1]] < 2 && right !== null;
    const canBottom =
      bottom - graph[current[0]][current[1]] < 2 && bottom !== null;
    const canTop = top - graph[current[0]][current[1]] < 2 && top !== null;
    return {
      walls: [canLeft, canRight, canBottom, canTop],
      heights: [left, right, bottom, top],
      index: [idxLeft, idxRight, idxBottom, idxTop],
    };
  }
}
console.log(part1(sample));
let example = new Array([0, 1], [0, 2]);
