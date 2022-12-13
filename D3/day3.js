import input from "./input.js";
const lilInput = `
vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
q
`;

const sumOfCompartments = (ipt) => {
  let arr = [];
  const result = ipt.trim().split("\n");
  const firstTask = result.forEach((current) => {
    const firstHalf = current.substring(0, current.length / 2).split("");
    const firstHalfUnique = () => [...new Set(firstHalf)];
    const secondHalf = current
      .substring(current.length / 2, current.length)
      .split("");
    const secondHalfUnique = () => [...new Set(secondHalf)];

    const unique = firstHalfUnique().forEach((e) => {
      secondHalfUnique().forEach((elem) => {
        if (elem === e) {
          arr.push(elem);
        }
      });
    });
  });
  const secondTaskArray = [...result];
  let secondTaskAns = [];
  const secondTask = () => {
    for (let i = 0; i <= secondTaskArray.length - 3; i += 3) {
      const compare = secondTaskArray.slice(i, i + 3);
      const firstContainer = compare[0].split("");
      const firstContainerSet = () => [...new Set(firstContainer)];
      const secondContainer = compare[1].split("");
      const secondContainerSet = () => [...new Set(secondContainer)];
      const thirdContainer = compare[2].split("");
      const thirdContainerSet = () => [...new Set(thirdContainer)];

      const letterAcross = firstContainerSet().forEach((e1) => {
        secondContainerSet().forEach((e2) => {
          thirdContainerSet().forEach((e3) => {
            if (e1 === e2 && e1 === e3 && e2 === e3) {
              secondTaskAns.push(e3);
            }
          });
        });
      });
    }
  };
  secondTask();
  function answer(lista) {
    const result = lista
      .map((e) => {
        const num = e.charCodeAt();
        return num < 96 ? num - 38 : num - 96;
      })
      .reduce((sum, val) => (sum += val), 0);
    return result;
  }
  return answer(secondTaskAns);
};
console.log(sumOfCompartments(input));
//console.log(string.charCodeAt()-38);
//console.log(string2.charCodeAt()-96);
