function solution(a: number[]): number {
  const halfIndex = Math.floor(a.length / 2)
  if (a.length % 2 === 1) return a[halfIndex]

  const [firstMidNumber, secondMidNumber] =  [a[halfIndex - 1], a[halfIndex]]
  let [sumOfTheFirstHalf1, sumOfTheSecondHalf1, secondHalfIndex] = [0, 0, a.length - 1]
  let [sumOfTheFirstHalf2, sumOfTheSecondHalf2] = [0, 0, a.length - 1]

  for (let firstHalfindex = 0; firstHalfindex < halfIndex; firstHalfindex++) {
    sumOfTheFirstHalf1 += Math.abs(firstMidNumber - a[firstHalfindex])
    sumOfTheSecondHalf1 += Math.abs(firstMidNumber - a[secondHalfIndex])

    sumOfTheFirstHalf2 += Math.abs(secondMidNumber - a[firstHalfindex])
    sumOfTheSecondHalf2 += Math.abs(secondMidNumber - a[secondHalfIndex])

    secondHalfIndex--
  }
  const sumOfFirstMidNumber = sumOfTheFirstHalf1 + sumOfTheSecondHalf1
  const sumOfTheSecondMidNumber = sumOfTheFirstHalf2 + sumOfTheSecondHalf2

  if (sumOfFirstMidNumber <= sumOfTheSecondMidNumber) return firstMidNumber
  return secondMidNumber
}