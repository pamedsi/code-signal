function solution(deposit: number, rate: number, threshold: number): number {
  let [years, amount] = [0, deposit]
  const rateInTimes = 1 + (rate / 100)

  while (amount < threshold) {
    amount *= rateInTimes
    years++
  }

  return years
}

console.log(solution(100, 20, 170))