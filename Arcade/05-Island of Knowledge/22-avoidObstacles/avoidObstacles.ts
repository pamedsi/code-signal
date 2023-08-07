function _solution(inputArray: number[]) {
    const biggest = Math.max(...inputArray)
    for (let index = 1; index < biggest; index++) if (inputArray.every(number => number % index !== 0)) return index
    return biggest + 1
}

console.log(_solution([2, 3]))