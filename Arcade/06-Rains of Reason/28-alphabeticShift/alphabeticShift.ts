function solution(inputString: string): string {
  const aCode = "a".charCodeAt(0)
  const ACode = "A".charCodeAt(0)
  const stringToBeReturend: string[] = []

  inputString.split('').forEach(letter => {
    if (letter === "z") stringToBeReturend.push(String.fromCharCode(aCode))
    else if (letter === "Z") stringToBeReturend.push(String.fromCharCode(ACode))
    else stringToBeReturend.push(String.fromCharCode(letter.charCodeAt(0) + 1))
  })
  
  return stringToBeReturend.join('')
}

console.log(solution("crazy"))