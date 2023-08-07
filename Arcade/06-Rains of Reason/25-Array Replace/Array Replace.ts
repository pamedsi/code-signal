function solution(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
  const arrayToBeReturned: number[] = []

  inputArray.forEach(number => {
    if(number === elemToReplace) arrayToBeReturned.push(substitutionElem)
    else arrayToBeReturned.push(number)
  })
  return arrayToBeReturned
}