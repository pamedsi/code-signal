function solution(n: number, firstNumber: number) {
  const midCircle = n / 2
  if (firstNumber >= midCircle) return firstNumber - midCircle
  else return firstNumber + midCircle
}