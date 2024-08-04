function solution(inputArray: string[]): boolean {
  function diffByOne(a: string, b: string) {
    let differences = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) differences++;
        if (differences > 1) return false;
    }
    return differences === 1;
  }
  
  function allElementsDiffByOne(strings: string[]): boolean {
    for (let i = 0; i < strings.length - 1; i++) {
      const currentElement = strings[i]
      const nextElement = strings[i + 1]
      if (!diffByOne(currentElement, nextElement)) {
        return false
      }
    }
    return true
  }

  function permute(arr: string[]): string[][] {
    if (arr.length === 1) {
      return [arr];
    }

    const permutations: string[][] = [];
    for (let i = 0; i < arr.length; i++) {
      const currentElement = arr[i];
      const remainingElements = arr.slice(0, i).concat(arr.slice(i + 1));
      const permutationsOfRemaining = permute(remainingElements);

      for (const permutation of permutationsOfRemaining) {
        const wholePermutation = [currentElement, ...permutation]
        // if (wholePermutation.length === inputArray.length && allElementsDiffByOne(wholePermutation)) return true
        permutations.push(wholePermutation);
      }
    }
    return permutations;
  }
  
  const permutations: string[][] = permute(inputArray)

  for (let i = 0; i < permutations.length; i++) {
    const permutation = permutations[i];
    if (allElementsDiffByOne(permutation)) return true
  }
  
  return false
}

const input = ["bbb", "bab", "aba"]
// const input = ["aba", "bbb", "bab"]
// const input = ["abc", "abx", "axx", "abx", "abc"]
// const input = ["abc", "abx", "axx", "abc", "abx"] OK
// const input = ["abc", "abx", "abc", "axx", "abx"]
  // const input = ["abc", "abx", "abc", "abx", "axx"] OK
// const input = ["abc", "abc", "abx", "axx", "abx"]

console.log(solution(input))
// Acontecerá de receber arrays iguais?