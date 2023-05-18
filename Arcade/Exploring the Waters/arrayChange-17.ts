function solution(inputArray: number[]): number {
  const isStrictlyIncreasing = (array: number[], i = 0) => {
      interface strictlyIncreasing {
        strictlyIncreasing: boolean
        indexToFix?: number
      }
      for (i; i < array.length - 1; i++) if (array[i] >= array[i + 1]) return {strictlyIncreasing: false, indexToFix: i} as strictlyIncreasing
      return {strictlyIncreasing: true}
    }

  const regulateArray = (array: number[]) => {
    const {strictlyIncreasing, indexToFix} = isStrictlyIncreasing(array)
    if (strictlyIncreasing) return 0
    
    const copyInputArray = [...array]
    let [moviments, index] = [0, Number(indexToFix)]

    while (!isStrictlyIncreasing(copyInputArray, index).strictlyIncreasing) {
      const differenceToFix = (copyInputArray[index] - copyInputArray[index + 1]) + 1
      copyInputArray[index + 1] = copyInputArray[index + 1] + differenceToFix
      moviments += differenceToFix
      index = Number(isStrictlyIncreasing(copyInputArray, index).indexToFix)
    }

    return moviments
  }

  return regulateArray(inputArray)
}

console.log(solution([1,2,3,4]))