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
        if (e === "S" || e === "E") return e;
        else {
          return e.charCodeAt() - 96;
        }
      });
    });
  const adjList = () => {
    const list = new Map();
    let start, end;
    for (let row = 0; row < graph.length; row++) {
      for (let col = 0; col < graph[0].length; col++) {
        const pos = graph[row][col];
        const point = [row, col];
        if (pos === "E") end = point;
        if (pos === "S") start = point;
        let neighbours = [
          [row, col + 1],
          [row, col - 1],
          [row + 1, col],
          [row - 1, col],
        ];
        for (const [nrow, ncol] of neighbours) {
          if (
            nrow < 0 ||
            nrow >= graph.length ||
            ncol < 0 ||
            ncol >= graph[0].length
          )
            continue;
          let nPos = graph[nrow][ncol];
          if (nPos === "S") nPos = 1;
          else if (nPos === "E") nPos = 26;
          if (nPos - pos <= 1) {
            if (!list.has(point)) list.set(point, []);
            list.get(point).push([nrow, ncol]);
          }
        }
      }
    }
    const shortestPathSeen = new Map();
    shortestPathSeen.set(start, 0);
    const queue = [[start, 0]];
    console.log(queue);
    while (queue.length > 0) {
      const [currentPos, steps] = queue.shift();
      const nextSteps = steps + 1;
      for (const neighbor of list.get(currentPos)) {
        if (
          !shortestPathSeen.has(neighbor) ||
          nextSteps < shortestPathSeen.get(neighbor)
        ) {
          shortestPathSeen.set(neighbor, nextSteps);
          if (neighbor !== end) queue.push([neighbor, nextSteps]);
        }
      }
    }
    return shortestPathSeen.has(end) ? shortestPathSeen.get(end) : Infinity;
  };
  console.log(adjList());
}
part1(sample);
